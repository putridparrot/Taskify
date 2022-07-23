# Taskify Overview Specification

This document acts as an overview of the features required by the Taskify application in general and where approroate differences between implementations/platforms.

## Task lists

A task list is simply a collection of tasks. Taskify allows for a fixed set of _system_ task lists and an unlimited set of _user_ task lists. The _system_ task lists include the following

* My Day - Displays any tasks that have been marked as "My Day", i.e. things the user wants to look into
* Important - Displays any tasks that have been marked as important
* Planned - Displays any tasks with due dates or reminders set
* Assigned to you - Displays any tasks assigned to the user
* Tasks - Displays all tasks not part of any _user_ task lists or created within the Tasks task list

## Selected task list view

_Specifics for system lists_

Note: System lists in MS todo are known as smart lists.

Selecting a task list in the navigator will display the list of tasks from that selected "Task list". At the footer  of the screen will always be an "Add a task" editor apart from the "Assigned to you" view.

Each view should have a different background colour which the footer should have a slightly different colour to stand out (i.e. be darker).

In most cases when no tasks are shown for a list a graphic and a small piece of hint text should be displayed to show the user what they should do to add tasks to this task list. 

So in many cases we will list the standard options for each view in the follow specifications. From top of the view to the bottom.

Right mouse clicking on a task list should display a context menu, the options available will differ between task lists. Options may exist in the future, such as "Share list" but for now the minimal required will be listed for each task list.

## My Day

* My Day cannot be hidden

* The My Day task list view should have the header My Day and below this should be the date. 
* The footer should say "Add a task" when in edit mode it should offer an drop down to select the task list to assign to which wil be Tasks by default and then any user defined task list
* Context menu should only show "Print list"

Tasks must be explicity marked for "My Day" to be visible here.

## Important

* The icon and Important text should display at the top
* Centred in the view should be an image and some text, for example "Try starring some tasks to see them here."
* The footer should say "Add a task" when in edit mode it should offer an drop down to select the task list to assign to which wil be Tasks by default and then any user defined task list
* Context menu should only show "Print list" and "Hide smart list"

Tasks marked as Important across Tasks and User Tasks will be displayed here.

## Planned

* The icon and Planned text should display at the top
* Centred in the view should be an image and some text, for example "Tasks with due dates or reminders will appear here." when in edit mode it should offer an drop down to select the task list to assign to which wil be Tasks by default and then any user defined task list
* The footer should say "Add a task due today"
* Context menu should only show "Print list" and "Hide smart list"

Tasks with a dure date or reminder date across Tasks and User Tasks will be displayed here. If they are in the past they're displayed with red text for the date otherwise default coloured text.

## Assigned to you (not being implemented until/unless we implement sharing)

* The icon and Assigned to you text should display at the top
* Centred in the view should be an image and some text, for example "Tasks assigned to you will appear here."
* No footer should exist 
* Context menu should only show "Print list" and "Hide smart list"

## Tasks

* Tasks cannot be hidden

* The icon and Tasks to you text should display at the top
* Centred in the view should be an image and some text, for example "Tasks show up here if they aren't part of any lists you've created."
* The footer should say "Add a task"
* Context menu should only show "Print list"

Tasks acts as a catch all for all tasks not assigned to a user task list.

## User defined task lists

* The Title of the task list should display at the top
* No image or text should be displayed.
* The footer should say "Add a task"
* Context menu should show "Rename list", "Print list", "Duplicate list" and "Delete list"

## Search

Somewhere near the top of the screen, maybe in the navigation bar or appbar, a button for search should exist. This should display a view on the right with a search text box and this should allow you to search all tasks.

Search results should be displayed in the view.

## Options for a task and also when a task is selected

A task should display an icon/button to mark as completed on the left and an icon/button for important on the right. When click the task is marked as complete and/or important.

If Completed tasks exist in this view and "Completed" button should disaplay allowing you to show/hide completed items which will always be displayed beneath non-complete items.

When a task is selected a right hand flyout should appear which allows you to do the following

* See any steps for the task (An important button should be available)
* Add a next step to the task
* Button to Add to My Day
* Button to Remind me
* Button Add due date
* Button to Repeat
* Button to Assign to
* Button to Add file (tbd)
* Text input to Add not
* Footer to hide flyout showing the date the task was created and a delete button


