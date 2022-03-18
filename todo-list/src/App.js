import { useState } from "react";
import ListingPart from "./ListingPart";
import SearchPart from "./SearchPart";


function App() {

  const [toDoList, setToDoList] = useState([]);
  const [item, setItem] = useState("");

  const updateCurrentItemCallback = (childData) => {
    setItem(childData.target.value)
  }

  const addToListCallback = () => {
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


  const deleteFromListCallback = (currItem) => {
    let tempList = [...toDoList];
    tempList = tempList.filter((cItem) => cItem.key!==currItem.key);
    setToDoList(tempList);
  }

  return (
    <div>

      <SearchPart itemCallBack={updateCurrentItemCallback} addCallback={addToListCallback} />

      <ListingPart deleteCallback = {deleteFromListCallback} resultList = {toDoList}/>

    </div>
  );
}

export default App;