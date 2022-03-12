import Logic from "./Logic";

function ListArea(){
    return (
        <div>
        <ul>
          {Logic.toDoList.map( curItem => (
            <li>{curItem.itemValue}
             <img src="Red_Cross.png" alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ListArea;