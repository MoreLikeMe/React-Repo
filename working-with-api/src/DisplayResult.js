

function DisplayResult(props){

    return (
        <div>
            <table>
                <tr>
                    <th>Roll No.</th>
                    <th>Student Name</th>
                </tr>

            
                {props.resultList.map((student) => (
                    <tr>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                    </tr>
                ))}

            </table>
        </div>
    );

}

export default DisplayResult;