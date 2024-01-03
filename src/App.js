import './App.css';
import { useState } from 'react';

const data = [
  {
    grade: null,
    credits: null
  },
]
const GradeTable = () => {
  // const [lastTr, setLastTr] = useState(tr)
  const [gradeData, setGradeData] = useState(data)

  // const getLastTr = () => {
  //   const last = ("#gradeTable").find("tr").last()
  //   setGradeData(last)
  // }

  const onAdd = () => {
    "#gradeTable".find("tr").last().after(
      "<tr><td><input name='grade' value={grade} placeholder='Grade' onChange={onChangeInput} onClick={onClickInput}></input></td><td><input name='credits' value={credits} placeholder='Credits' onChange={onChangeInput} onClick={onClickInput}></input></td></tr>"
      );
  }

  const onChangeInput = (e, rowIndex, colIndex) => {
    const {name, value} = e.target
    const editData = gradeData.map((item) =>
    item.rowIndex === rowIndex && item.colIndex === colIndex && name ? {...item, [name]: value}: item
    )
    setGradeData(editData)
  }

  const onClickInput = () => {
    var rowIndex = this.closest("tr").index();
    var colIndex = this.index();
  }

  return (
    <div class="table" id="gradeTable">
      <table>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          {gradeData.map(({grade, credits}) => (
            <tr>
            <td><input name="grade" value={grade} placeholder="Grade" onChange={onChangeInput} onClick={onClickInput}></input></td>
            <td><input name="credits" value={credits} placeholder="Credits" onChange={onChangeInput} onClick={onClickInput}></input></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onAdd}>Add grade</button>
    </div>
  );
}

function AddButton() {
  const [count, setCount] = useState(0);

  function addRow() {
    setCount(count + 1);
  }

  return (
    <button class="addButton" onClick={addRow}>
      Add grade number {count + 1}.
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Grade Calculator: UBC</h1>
      <p>Please enter your current CPSC grades and credits:</p>
      <GradeTable/>
      <AddButton/>
    </div>
  );
}

export default App;
