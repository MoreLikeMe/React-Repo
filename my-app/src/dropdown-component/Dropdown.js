import "./Dropdown.css";

export default function Dropdown({dataList, selectedData, selectData}){

    return(
        <>
        { dataList && 
            <select className="dropdown" onChange={(e) => selectData(e)}>
                {
                selectedData!=null
                ?dataList.map((element) => (
                    <option selected={selectedData.id===element.id} value={element.id} key={element.id}>{element.name}</option>
                )):dataList.map((element) => (
                    <option value={element.id} key={element.id}>{element.name}</option>
                ))}
            </select>
        }
        </>
    );
}