import React from 'react';
import styled from "styled-components";

import Lixeira from './assets/images/lixeira.svg';
import Lapis from './assets/images/ferramenta-lapis.svg';

function ToDoList({ all, updateAll, setUserInput, setIsEdit, setSelected }) {

    const finished = (id) => {
        const updatedList = all.map((item, index) => {
            if (id !== index) return item;
            return { ...item, complete: !(item.complete) };
        });
        updateAll(updatedList)

        localStorage.setItem("tasks", JSON.stringify(updatedList));
    }

    const edit = (todo, id) => {
        setUserInput(todo.task);
        setIsEdit(true);
        setSelected(id);
    }

    const remove = (index) => {
        const updatedList = all.filter((task, taskIndex) => {
            return taskIndex !== index;
        });
        updateAll(updatedList);
        localStorage.setItem("tasks", JSON.stringify(updatedList));
    }

    return (
        <ListContent>
            <div className="to-do-list">
                {all.map((todo, index) => (
                    <div className="display" key={index}>
                        <div
                            className={`to-do ${todo.complete ? "taskComplete" : ""}`}
                            onClick={() => (finished(index))}>
                            Tarefa {index + 1}: {todo.task}
                        </div>
                        <div className="buttons">
                            <button className="buttonEdit" onClick={() => edit(todo, index)}><img src={Lapis} alt="pencil icon" /></button>
                            <button className="buttonRemove" onClick={() => remove(index)}><img src={Lixeira} alt="trash icon" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </ListContent>
    );
}

export default ToDoList;

const ListContent = styled.section`

    .to-do {
        background: #fff;
        padding: 10px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        width: 400px;
        border-bottom: solid 1px #ecebeb;
    }
    
    .to-do-list {
        margin: auto;
        background: #ecebeb;
        padding: 10px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 6px 6px -6px black;
        max-height: 60%;
        overflow: scroll;
    }

    .taskComplete {
        text-decoration: line-through green;
        background-image: linear-gradient(45deg, #00800063,white);
    }

    .display .buttons {
        display: flex;
        flex-direction: row;

        & > .buttonEdit {
            background-color: white;
            border: none;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            font-size: 14px;
            width: 100%;
            outline: 0;
            border-bottom: solid 1px #ecebeb;
            cursor: pointer;

            & > img {
                padding: 0;
                height: 3vh;
                filter: invert(40%) sepia(50%) saturate(4249%) hue-rotate(180deg) brightness(86%) contrast(95%);
            }
        }
        
        & > .buttonRemove {
            background-color: white;
            border: none;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            font-size: 14px;
            width: 100%;
            outline: 0;
            border-bottom: solid 1px #ecebeb;
            cursor: pointer;

            & > img {
                padding: 0;
                height: 3vh;
                filter: invert(30%) sepia(92%) saturate(4269%) hue-rotate(344deg) brightness(89%) contrast(102%);
            }
        }
            
    }

`