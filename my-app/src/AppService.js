const dataLocation = "/students.json";
/*
    dataList stores the data here
    We are using it as Database
    It'll be Deprecated once we write 
    our Backend
*/
var dataList = null;
/*
    Notes:
    as of now this function fetches data by loading JSON file
    TODO: fetch data from API calls
*/
export function loadData(populateData){
    //When dataList is already holding data, it means, this is not the first time this method is being hit
    //Otherwise, we'll fetch the data by fetching the Json
    if(dataList!=null){
        populateData([...dataList]);
    } else {
        fetch(dataLocation)
        .then(response => response.json())
        .then(data => {
            dataList = data;
            populateData(data);
        })
        .catch(error => console.log("Error: " + error));
    }   
}

export function insertNewStudent(newStudent){
    dataList.push(newStudent);
}

export function addTaskToStudent(studentToUpdate, task){
    dataList = dataList.map(student => {
        if(student.id===studentToUpdate.id){
            student.tasks.push(task);
        }
        return student;
    })
}

export function deleteTaskofStudent(selectedStudent, taskToDelete){
    dataList = dataList.map(student => {
        if(selectedStudent.id === student.id){
            student.tasks = student.tasks.filter(task => {
                if(task.taskName===taskToDelete.taskName && task.taskDetails===taskToDelete.taskDetails){
                    return false;
                }
                return true;
            })
        }
        return student;
    })
}

/*
    Notes:
    This method is written with XMLHttpRequest()
    just for learning purpose
*/
export function loadDataUsingHttpRequest(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          return data;
        }
    };
    //this json is being fetched from the public folder...
    xhr.open('GET', '/students.json', false);
    xhr.send();
}