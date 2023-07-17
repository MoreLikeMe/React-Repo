import AddData from "../add-data-component/AddData";
import "./TaskComponent.css";

export default function TaskComponent(props){

    return(
        <div className="task">
        <div className="task-header">
            <h3 className="task-header-text">Tasklist for : {props.selectedStudent!=null?props.selectedStudent.name:"Not Selected"}</h3>
        </div>
        { props.selectedStudent &&
            <div className="task-body">
            <div>
                <ul className="task-list">
                    {props.selectedStudent.tasks.map((task) => (
                        <li className="task-single">
                            {task.taskName}: 
                            <span className="task-single-span">{task.taskDetails}</span>
                            <button type="button" className="deleteButton" onClick={() => props.deleteTask(task.taskName, task.taskDetails)}><img src="trash.png" alt="Delete" className="deleteIcon"/></button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <AddData buttonName="Add Task" addData={props.addTask}/>
            </div>
            </div>
        }
        </div>
    );
}