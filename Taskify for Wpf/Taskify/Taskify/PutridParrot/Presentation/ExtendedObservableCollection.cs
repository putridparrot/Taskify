﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
#if !NETSTANDARD2_0
using System.Windows.Threading;
#endif
using PutridParrot.Presentation.Helpers;
using PutridParrot.Presentation.Interfaces;

namespace Taskify.Presentation
{
    /// <summary>
	/// A dispatcher aware observable collection. As the default ObservableCollection does
	/// not marshal changes onto the UI thread, this class handled such marshalling as well
	/// as offering the ability to Begin and End updates, so trying to only fire update events
	/// when necessary.
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class ExtendedObservableCollection<T> : ObservableCollection<T>,
        IItemChanged

    {
        /// <summary>
        /// Raised when an item within the collection has changed
        /// </summary>
        public event PropertyChangedEventHandler ItemChanged;

        private ReferenceCounter _updating;

        /// <summary>
        /// Default constructor creates an empty collection
        /// </summary>
        public ExtendedObservableCollection() :
            base()
        {
        }

        /// <summary>
        /// Constructor adds items from the supplied
        /// list to the collection
        /// </summary>
        /// <param name="list"></param>
        public ExtendedObservableCollection(List<T> list) :
            base(list)
        {
        }

        /// <summary>
        /// Constructore adds the supplied enumerable items
        /// to the collection
        /// </summary>
        /// <param name="collection"></param>
        public ExtendedObservableCollection(IEnumerable<T> collection) :
            base(collection)
        {
        }

        /// <summary>
        /// Adds multiple items to the collection via an IEnumerable.
        /// Switches off change notifications whilst this is happening.
        /// </summary>
        /// <param name="e"></param>
        public void AddRange(IEnumerable<T> e)
        {
            if (e == null)
            {
                throw new ArgumentNullException(nameof(e));
            }

            try
            {
                BeginUpdate();

                foreach (var item in e)
                {
                    Add(item);
                }
            }
            finally
            {
                EndUpdate();
            }
        }

        /// <summary>
        /// Used internally to track Begin/EndUpdate usage
        /// </summary>
        /// <returns></returns>
        private ReferenceCounter GetOrCreateUpdating()
        {
            return _updating ?? (_updating = new ReferenceCounter());
        }

        /// <summary>
        /// Supresses collection change notifications, incrementing
        /// the update ref count.
        /// </summary>
        public void BeginUpdate()
        {
            GetOrCreateUpdating().AddRef();
        }

        /// <summary>
        /// Turns collection change notifications back on when 
        /// update ref count is zero
        /// </summary>
        public void EndUpdate()
        {
            if (GetOrCreateUpdating().Release() == 0)
            {
                OnCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Reset));
            }
        }

        /// <summary>
        /// Sorts the collection in place, i.e. makes changes to 
        /// the collection. Supresses notification change events
        /// whilst this happens
        /// </summary>
        /// <param name="comparison"></param>
        public void Sort(Comparison<T> comparison)
        {
            try
            {
                BeginUpdate();

                ListExtensions.Sort(this, comparison);
            }
            finally
            {
                EndUpdate();
            }
        }

        /// <summary>
        /// Event is called when the collection changes
        /// </summary>
        public override event NotifyCollectionChangedEventHandler CollectionChanged;

        /// <summary>
        /// When the collection changes but is in update mode, no changes propogate. 
        /// </summary>
        /// <param name="e"></param>
        protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
        {
            if (GetOrCreateUpdating().Count <= 0)
            {
                //base.OnCollectionChanged(e);
                // Taken from http://stackoverflow.com/questions/2104614/updating-an-observablecollection-in-a-separate-thread
                // to allow marshalling onto the UI thread, seems a neat solution
                var eventHandler = CollectionChanged;
                if (eventHandler != null)
                {
#if !NETSTANDARD2_0
                    var dispatcher = (from NotifyCollectionChangedEventHandler n in eventHandler.GetInvocationList()
                                      let dpo = n.Target as DispatcherObject
                                      where dpo != null
                                      select dpo.Dispatcher).FirstOrDefault();

                    if (dispatcher != null && !dispatcher.CheckAccess())
                    {
                        dispatcher.BeginInvoke(DispatcherPriority.DataBind, (Action)(() => OnCollectionChanged(e)));
                    }
                    else
                    {
#endif
                        foreach (NotifyCollectionChangedEventHandler n in eventHandler.GetInvocationList())
                        {
                            n.Invoke(this, e);
                        }
#if !NETSTANDARD2_0
                    }
#endif
                }
                OnPropertyChanged(new PropertyChangedEventArgs(nameof(IsEmpty)));
            }
            if (e.NewItems != null)
            {
                foreach (var item in e.NewItems)
                {
                    if (item is INotifyPropertyChanged propertyChanged)
                    {
                        propertyChanged.PropertyChanged += ItemPropertyChanged;
                    }
                }
            }
            if (e.OldItems != null)
            {
                foreach (var item in e.OldItems)
                {
                    if (item is INotifyPropertyChanged propertyChanged)
                    {
                        propertyChanged.PropertyChanged -= ItemPropertyChanged;
                    }
                }
            }
            OnPropertyChanged(new PropertyChangedEventArgs(nameof(IsEmpty)));
        }

        /// <summary>
        /// When an item within the collection (which supports INotifyPropertyChanged)
        /// changes, the ItemChange event is raised
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="propertyChangedEventArgs"></param>
        protected virtual void ItemPropertyChanged(object sender, PropertyChangedEventArgs propertyChangedEventArgs)
        {
            if (ItemChanged != null)
            {
                ItemChanged(sender, propertyChangedEventArgs);
            }
        }

        /// <summary>
        /// Get whether the collection is empty, this is useful
        /// if you want to bind to a boolean which reports
        /// when the collection goes from empty to not empty 
        /// and vice versa.
        /// </summary>
        public bool IsEmpty => Count <= 0;
    }
}