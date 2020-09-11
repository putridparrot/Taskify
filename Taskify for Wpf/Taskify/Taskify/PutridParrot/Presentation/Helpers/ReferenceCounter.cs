﻿namespace PutridParrot.Presentation.Helpers
{
    /// <summary>
    /// Simple reference counter, it doesn't store
    /// anything except the reference count - so is basically
    /// a threadsafe counter
    /// </summary>
    public class ReferenceCounter
    {
        private int _refCount;
        private readonly object _syncObject = new object();

        /// <summary>
        /// Increment the reference count
        /// </summary>
        /// <returns></returns>
        public int AddRef()
        {
            lock (_syncObject)
                return ++_refCount;
        }

        /// <summary>
        /// Decrement the reference count
        /// </summary>
        /// <returns></returns>
        public int Release()
        {
            lock (_syncObject)
                return _refCount != 0 ? --_refCount : 0;
        }

        /// <summary>
        /// Reset the reference count to zero
        /// </summary>
        public void Reset()
        {
            lock (_syncObject)
                _refCount = 0;
        }

        /// <summary>
        /// Get the current reference count
        /// </summary>
        public int Count
        {
            get
            {
                lock (_syncObject)
                    return _refCount;
            }
        }
    }
}