import './App.css';
import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,<span>   .</span> Let's start ❤️</h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => { setToDo(e.target.value) }} placeholder="🙂Add item..." />
        <i onClick={() => { setToDos([...toDos,{id:Date.now(), text:toDo, status:false}]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {  toDos.map((obj) => {


          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.value)
                  console.log(obj)
                }}value={obj.status}type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>)
        })
        }
      </div>
    </div>
  );
}

export default App;
