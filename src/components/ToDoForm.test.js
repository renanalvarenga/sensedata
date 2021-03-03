import { render, screen, fireEvent } from '@testing-library/react';
import ToDoForm from './ToDoForm';

test('renders learn react link', () => {
    render(<ToDoForm userInput={"new task"}
        setUserInput={() => { }}
        isEdit={false}
        all={[]}
        selected={1}
        updateAll={() => { }}
        addToDo={() => { }} />);
    const input = screen.getByLabelText("input");
    fireEvent.change(input, { target: { value: "new task" } })
    expect(input.value).toBe("new task");
});