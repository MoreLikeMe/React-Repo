

function ButtonArea(props){

    return (
        <div>
            <div>
                <button onClick="" name="add-student-button">Add Student</button>
            </div>
            <div>
                <input type="text" name="search-text" onChange={(e)=> props.handleSetValue(e.target.value)} placeholder="Type Name Here..."/>
                <button onClick={()=> props.handleClickCallback()} name="search-student-button">Search</button>
            </div>
        </div>
    );
}

export default ButtonArea;