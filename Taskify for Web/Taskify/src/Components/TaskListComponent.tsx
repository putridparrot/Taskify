import React from "react";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            {this.props.listName}
        </div>);
    }
}

export default TaskList
