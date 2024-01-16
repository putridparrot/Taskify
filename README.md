# Taskify

**This repository is meant as a place to try to implement the same basic application using various technologies. A tag has been created for the old code where we had some initial projects for mobile etc. but the React version had most of the work done to it, but also the code in some cases is out of sync with current packages/libraries. I'll be cleaning this repository up in the coming days and rebooting the project both in public and with the latest versions of packages etc.**

**This is NOT a fully working application at this point.**

_To run what we have working, startup the Web API application, then run the React/Web application using yarn start. By default a loging screen appears, but this is not fully hooked up, so just navivate to /app to see the React Taskify application. You may/will see some errors due to changes in Material UI that need fixing, but closing these will get you to the application. It currently does not any form of persistance, so you can move tasks around but upon refresh or restart, the sample tasks will be restored to the original places_ 

# Premise

Using Microsoft Todo and a template (at least in terms of functionality) this project is a task/todo cross platform application.

The aim is to implement Taskify for...

* Web using React
* Mobile, includes Android and iOS using MAUI (maybe React Native or Flutter), it needs to work on phone and tablet idioms
* Windows desktop using WPF and/or UWP (see note below)
* Mac desktop, probably using Swift.

# Functional Requirements

Core concepts.

* A task consists of a description, due date/time, notes, whether the task repeats, reminders (a date/time when to alert the user that a task is due) and a flag on whether important or not. A task can also contain sub-tasks (or steps)
* Task lists contain/groups tasks 
* There are two types of task list, the first type are "standard" built-in lists, for example _Today_ lists all tasks for today, _Important_ all tasks marked as important, _Assigned to you_ tasks assigned to the user and _Tasks_ which simply lists all tasks. The second type of task list are user defined lists which contain a description and tasks can be assigned to.
* Groups, user defines groups can be created that user defined task lists can be assigned to. A group should have a description.

See SPECIFICATION.md for more information.
