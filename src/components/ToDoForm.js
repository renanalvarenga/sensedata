import React from 'react';
import styled from "styled-components";

function ToDoForm({ addToDo, userInput, setUserInput, isEdit, all, updateAll, selected }) {

    const handleSubmit = e => {
        e.preventDefault();
        if (!isEdit) {
            if (!userInput) return;
            addToDo({ complete: false, task: userInput });
        } else {
            edit();
        }
        setUserInput("");
    };

    const edit = () => {
        const updatedList = all.map((item, index) => {
            if (selected !== index) return item;
            return { ...item, task: userInput };
        });
        updateAll(updatedList)

        localStorage.setItem("tasks", JSON.stringify(updatedList));

    }

    return (
        <FormContent>
            <form onSubmit={handleSubmit} className="to-do-form">
                <input
                    placeholder="Adicione aqui outra tarefa à lista..."
                    type="text"
                    className="input"
                    aria-label="input"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                />
            </form>
        </FormContent>
    );
};
export default ToDoForm;

const FormContent = styled.section`

    .to-do-form{
        margin: auto;
        background: #ecebeb;
        padding: 10px;
        max-width: 500px;

        & > input {
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
            font-size: 16px;
            outline: 0;
            border: none;
        }
    }
    
`