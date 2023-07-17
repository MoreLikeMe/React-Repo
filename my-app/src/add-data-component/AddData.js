import { useState } from "react";
import "./AddData.css";

export default function AddData(props){

    const [data, setData] = useState("");
    const [dataName, setDataName] = useState("");

    const handleClick = () => {
        props.isExtraFieldHide?props.addData(data):props.addData(dataName, data);
        setData("");
        setDataName("");
    }

    return (
        <>
            <input hidden={props.isExtraFieldHide} type="text" className="textbox" placeholder="Type Here... " value={dataName} onChange={(e) => setDataName(e.target.value)}/>
            <input type="text" className="textbox" placeholder="Type Here... " value={data} onChange={(e) => setData(e.target.value)}/>
            <button type="button" className="submitbutton" onClick={handleClick}><span><img src="plus_blue.png" className="plusIcon" alt="Add"/> {props.buttonName}</span></button>
        </>
    );
}