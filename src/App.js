import './App.css';
import { useState } from 'react';

function GradeRow() {
  return (
    <div class="row">
      <div class="col">
        <label class="col-label" for="col-grade">Grade</label>
        <input type="text" class="col-input" id="col-grade"></input>
      </div>
      <div class="col">
        <label class="col-label" for="col-credits">Credits</label>
        <input type="text" class="col-input" id="col-credits"></input>
      </div>
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
      <GradeRow/>
      <AddButton/>
    </div>
  );
}

export default App;
