Feature: Task List Items
	In order to see my tasks for a given task list
	I want to be able to get a list of those tasks from all available task lists	

@TaskListItems
Scenario: When I request matching tasks for a task list
	Given I have <tasks> for <taskList> with <isUserGenerated>
	When I request <taskList>'s tasks for <isUserGenerated>
	Then the resultant list should have <expected> items

	Examples: 
	| taskList | tasks | expected |isUserGenerated |
	| My Day   | 0     | 0        |False |
	| My Day   | 10    | 10       |True |
	| Important| 0     | 0        |False |
	| Important| 4     | 4        |True |
	| Planned  | 0     | 0        |False |
	| Planned  | 4     | 4        |True |
	| New List | 0     | 0        |True |
	| New List | 12    | 12       |True |


