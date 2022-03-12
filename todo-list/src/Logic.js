import { Component } from "react";


class Logic extends Component{

  constructor(props){
    super(props);
    this.state = {
      toDoList:[],
      item: ""            
    }; 


  } 

  setToDoList(list){
    this.setState({toDoList: list});
  } 

  setItem(val){
    this.setState({item: val});
  } 

  updateCurrentItem = (e) => {
    this.setItem(e.target.value);
  }

  addToList = () => {
    console.log("Hello");
    let isItemPresent = false;
    this.state.toDoList.forEach(element => {
      if(element.itemValue === this.state.item){
        isItemPresent = true;
      }
    });

    console.log(this.state.toDoList);

    if(!isItemPresent){
      const tempList = [...this.state.toDoList];
      tempList.push({key: Math.random(),itemValue :this.state.item});
      this.setToDoList(tempList);
    } else {
      alert('Item Already Present...');
    }

  }

  deleteFromList(currItem) {
    let tempList = [...this.state.toDoList];
    tempList = tempList.filter((cItem) => cItem.key!==currItem.key);
    this.setToDoList(tempList);
  }
}

export default Logic;