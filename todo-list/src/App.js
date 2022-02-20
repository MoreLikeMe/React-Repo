import { useState } from "react";


function App() {

  const [toDoList, setToDoList] = useState([]);
  const [item, setItem] = useState("");

  const updateCurrentItem = (e) => {
    setItem(e.target.value)
  }

  const addToList = () => {
    let isItemPresent = false;
    toDoList.forEach(element => {
      if(element.itemValue === item){
        isItemPresent = true;
      }
    });

    if(!isItemPresent){
      const tempList = [...toDoList];
      tempList.push({key: Math.random(),itemValue :item});
      setToDoList(tempList);
    } else {
      alert('Item Already Present...');
    }

  }

  const deleteFromList = (currItem) => {
    let tempList = [...toDoList];
    tempList = tempList.filter((cItem) => cItem.key!==currItem.key);
    setToDoList(tempList);
  }

  return (
    <div>
      Search Bar:
      <div className="mb-3">
        <label for="search" className="form-label"></label>
        <input onChange={(e) => updateCurrentItem(e)} value={item} type="text" className="form-control" name="search" id="" placeholder="Type Here...  " />
      </div>

      <div className="d-grid gap-2"> 
        <button type="button" name="search-but" id="" className="btn btn-primary" onClick={addToList}>
          Add
        </button>
      </div>

      <div>
        <ul>
          {toDoList.map( curItem => (
            <li>{curItem.itemValue}
             <img src="Red_Cross.png" alt="" onClick={() => deleteFromList(curItem)}/>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;