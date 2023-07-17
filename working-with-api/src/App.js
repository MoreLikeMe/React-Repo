import './App.css';
import {useEffect, useState} from 'react';
import ButtonArea from './ButtonArea';
import DisplayResult from './DisplayResult';  

function App() {

  const [studentList, setStudentList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {

      fetch("http://localhost:5000/all-student")
      .then((res) => res.json())
      .then((result) => {
        setStudentList(result);
      });
  }, []);

  const setSearchValue = (childData) => {
    setSearchText(childData);
  }

  const searchClickCallback = () => {
    fetch("http://localhost:5000/student-by-name-pattern?pattern=" + searchText)
      .then((res) => res.json())
      .then((result) => {
        setStudentList(result);
      });
  }

  return (
    <div>
      <ButtonArea handleSetValue = {setSearchValue} handleClickCallback = {searchClickCallback} />
      <DisplayResult resultList={studentList} />
    </div>
  );
}

export default App;
