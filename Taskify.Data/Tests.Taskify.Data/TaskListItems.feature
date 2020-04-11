Feature: Task List Items
	In order to see my tasks for a given task list
	I want to be able to get a list of those tasks from all available task lists	

@TaskListItems
Scenario: When I request matching tasks for a task list
	Given I have <tasks> for <taskList>
	When I request <taskList>'s tasks
	Then the resultant list should have <expected> items

	Examples: 
	| taskList | tasks | expected |
	| My Day   | 0     | 0        |
	| My Day   | 10    | 10       |
	| Important| 0     | 0        |
	| Important| 4     | 4        |
	| Planned  | 0     | 0        |
	| Planned  | 4     | 4        |
	| New List | 0     | 0        |
	| New List | 12    | 12       |

@TaskListItems
Scenario: When I request matching tasks for a known task list state
	Given I have a known state of tasks
	When I request <taskList>'s tasks
	Then the resultant list should have <expected> items

	Examples: 
	| taskList | expected |
	| My Day   | 2        |
	| Important| 3        |
	| Planned  | 7        |
	| New List | 4        |

