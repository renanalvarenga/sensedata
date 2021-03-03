import React, { useState, useCallback, useEffect } from 'react';
import styled from "styled-components";

import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import Logo from './components/assets/images/logoSenseData.png';
import Footer from './components/Footer';

function App() {
  const [all, setAll] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [selected, setSelected] = useState(undefined);

  const callBackSaved = useCallback(() => {
    const tasks = localStorage.getItem("tasks");
    setAll(!!tasks ? JSON.parse(tasks) : [
      { complete: false, task: "Entregar um teste bem feito" },
      { complete: false, task: "Ser aprovado na entrevista" },
      { complete: false, task: "Ser contratado como Front-End Jr." }
    ])
  }, []);

  useEffect(() => {
    callBackSaved()
  }, [callBackSaved]);

  return (
    <>
      <AppContent>
        <>
          <img src={Logo} alt="logo" />
          <h1>To Do List</h1>
          <div className="App">
            <ToDoForm
              userInput={userInput}
              setUserInput={setUserInput}
              isEdit={isEdit}
              all={all}
              selected={selected}
              updateAll={(list) => { setAll(list) }}
              addToDo={(todo) => {
                if (todo.task.trim().length > 0) {
                  const updatedList = [...all, todo];
                  setAll(updatedList);
                  localStorage.setItem("tasks", JSON.stringify(updatedList));
                }
              }} />
            <ToDoList
              setUserInput={setUserInput}
              setIsEdit={setIsEdit}
              all={all}
              setSelected={setSelected}
              updateAll={(list) => { setAll(list) }} />
          </div>
        </>
      </AppContent>
      <Footer />
    </>
  );
}

export default App;

const AppContent = styled.section`
  background: white;
  padding: 30px;
  height: 53vh;

  img {
    height: 80px;
    text-align: center;
    padding: 30px;
  }

  .display {
    display: flex;
  }
`

