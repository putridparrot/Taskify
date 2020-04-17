import React from "react";
import axios from "axios";

class TaskList extends React.Component {
    state = {
        values:[]
    }

    render(){
        console.log("inside TaskList render");
        return <div>
                    <ul>
                        {
                            this.state.values.map((value:any) => (
                                <li key={value.name}>{value.name}</li>
                            ))
                        }
                    </ul>
                </div>
    }

    componentDidMount(): void {
        console.log("inside TaskList componentDidMount()");
        axios.get("http://localhost:52606/api/tasklist")
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    values: response.data
                });
            }).catch((ex)=>{
            console.log(ex);
        });
    }

}

export default TaskList
