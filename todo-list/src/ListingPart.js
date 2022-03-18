

function ListingPart(props){

    return (
        <div>
        <ul>
          {props.resultList.map( curItem => (
            <li>{curItem.itemValue}
             <img src="Red_Cross.png" alt="" onClick={() => props.deleteCallback(curItem)}/>
            </li>
          ))}
        </ul>
      </div>
    );
}


export default ListingPart;