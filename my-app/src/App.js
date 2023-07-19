import { useEffect, useState } from 'react';
import Dropdown from './dropdown-component/Dropdown';
import AddData from './add-data-component/AddData';
import TaskComponent from './task-component/TaskComponent';
import { addTaskToStudent, insertNewStudent, loadData, deleteTaskofStudent } from './AppService';

function App() {

  const [studentList, setStudentList] = useState(null);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const populateStudentList = (studentList) => {
    setStudentList(studentList);
  };

  useEffect(() => {
    loadData(populateStudentList);
    return;
  }, [selectedStudent]);

  function selectStudent(event) {
    //setTimeout delays the operation by 1500 miilliseconds
    setTimeout(() => {
      let selectedStudentId = event.target.value;
      //filter returns an array of objects with macthing values
      let selectedStudent = studentList.filter(student => (student.id === selectedStudentId));
      setSelectedStudent(selectedStudent[0]);
    }, 1500);
  }

  function addStudent(newStudentName) {
    if (newStudentName !== null) {
      let newStudent = { name: newStudentName, id: JSON.stringify(studentList.length + 1), tasks: [] };
      insertNewStudent(newStudent);
      setSelectedStudent(newStudent);
    }
  }

  function addTask(newTaskName, newTaskDetails) {
    const newTask = { taskName: newTaskName, taskDetails: newTaskDetails };
    addTaskToStudent(selectedStudent, newTask);
    setSelectedStudent({
      ...selectedStudent, tasks: [...selectedStudent.tasks, newTask]
    });
  }

  function deleteTask(tn, td){
     const taskToDelete = { taskName: tn, taskDetails: td };
     deleteTaskofStudent(selectedStudent, taskToDelete);
     setSelectedStudent({
      ...selectedStudent, tasks: selectedStudent.tasks.filter(task => {
        if(task.taskName===tn && task.taskDetails===td){
            return false;
        }
        return true;
      })
     })
  }

  return (
    <div>
      <div>
        <AddData buttonName="Add Student" addData={addStudent} isExtraFieldHide={true} />
        <Dropdown dataList={studentList} selectedData={selectedStudent} selectData={selectStudent} />
      </div>
      <hr />
      <div>
        <TaskComponent selectedStudent={selectedStudent} addTask={addTask} deleteTask={deleteTask}></TaskComponent>
      </div>
    </div>
  );
}

export default App;