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

The mobile application supports Android, iOS (and possibly UWP) using Xamarin.Forms and aims work on phone and tablet type devices.

# Windows desktop

There may well end up being two "Windows desktop" implementations, one in WPF and one in UWP which would allow the application to target the Windows store or even be installed on Xbox.

# Mac desktop

The Mac desktop application is currently being written using Xamarin.Mac.

# Linux/Gnome

Not sure the level of support but might be interesting the try GTK#

https://www.mono-project.com/download/stable/

Installed to C:\Program Files (x86)\GtkSharp\2.12\lib

# Tizen OS

Tizen watch is currently using Tizen.NET and should eventually include integration with phones via SAP (Samsung Accessory Protocol) see https://developer.samsung.com/galaxy-watch-develop/creating-your-first-app/native-companion/interact-device.html.

# Web

A Web based implementation is written using React along with material-ui and aims to support PWA functionality for an offline experience.