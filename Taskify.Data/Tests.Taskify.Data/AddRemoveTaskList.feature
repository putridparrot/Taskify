Feature: Add/Removal of task lists
	In order to maintain my lists
	I want to be able to add and remove user defines lists
	And not be able to remove smart lists

@AddRemoveLists
Scenario: Add user defined list
	Given I have a known set of user lists
	And I add a new list <name>
	Then I expect to see <count> <name> list in the user defined list

	Examples: 
	| name | count |
	| L100 | 1     |

@AddRemoveLists
Scenario: Remove user defined list
	Given I have a known set of user lists
	And I remove a list <name>
	Then I expect to see <count> <name> list in the user defined list

	Examples: 
	| name | count |
	| L100 | 0     |

@AddRemoveLists
Scenario: Add user defined list which already exists
	Given I have a known set of user lists
	And I add a new list <name>
	Then I expect to see <count> <name> list in the user defined list

	Examples: 
	| name | count |
	| L100 | 1     |

@AddRemoveLists
Scenario: Add user defined list with the same name as a smart list
	Given I have a known set of user lists
	And I add a new list <name>
	Then I expect to see <count> <name> list in the user defined list

	Examples: 
	| name      | count |
	| Important | 2     |

@AddRemoveLists
Scenario: Remove a user defined list with the name of a smart list
	Given I have a known set of user lists
	And I add a new list <name>
	And I remove a list <name>
	Then I expect to see <count> <name> list in the user defined list

	Examples: 
	| name      | count |
	| Important | 1     |
