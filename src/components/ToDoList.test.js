import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

test('ToDoList tests', () => {
  render(<ToDoList setUserInput={() => {}}
    setIsEdit={() => {}}
    all={[]}
    setSelected={() => {}}
    updateAll={() => {}}/>);
});
