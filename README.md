# Taskify

Using Microsoft Todo and a template (at least in terms of functionality) this project is a task/todo cross platform application.

The aim is to implement Taskify for...

* Mobile, includes Android and iOS using Xamarin.Forms, needs to work on phone and tablet idioms
* Windows desktop using WPF and/or UWP (see note below)
* Mac desktop using Xamarin.Mac
* Tizen OS, specifically for the watch using Xamarin.Tizen
* Web using React

# Functional Requirements

Core concepts.

* A task consists of a description, due date/time, notes, whether the task repeats, reminders (a date/time when to alert the user that a task is due) and a flag on whether important or not. A task can also contain sub-tasks (or steps)
* Task lists contain/groups tasks 
* There are two types of task list, the first type are "standard" built-in lists, for example _Today_ lists all tasks for today, _Important_ all tasks marked as important, _Assigned to you_ tasks assigned to the user and _Tasks_ which simply lists all tasks. The second type of task list are user defined lists which contain a description and tasks can be assigned to.
* Groups, user defines groups can be created that user defined task lists can be assigned to. A group should have a description.

# Mobile 

The mobile application should support Android, iOS (and possibly UWP) and work on phone and tablet type devices.

# Windows desktop

The Windows desktop should be written in either WPF or UWP (or both as UWP would be supported in the Window store)

# Mac desktop

The Mac desktop application should be written using Xamarin.Mac.

# Tizen OS

Tizen watch should be supported using Tizen.NET and include integration with Samsung phones.

# Web

A Web based implementation should be written using React and support PWA functionality for an offline experience.