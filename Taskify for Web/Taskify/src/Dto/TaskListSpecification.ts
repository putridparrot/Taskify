export interface TaskListSpecification {
    canDelete: boolean;
    canResume: boolean;
    canShare: boolean;
    canDuplicate: boolean;
    isImportantTaskAllowed: boolean;
    isMyDayTaskAllowed: boolean;
    isUserGenerated: boolean;
}