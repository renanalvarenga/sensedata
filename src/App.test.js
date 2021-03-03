import { render, screen } from '@testing-library/react';
import App from './App';

test('app tests', () => {
  render(<App />);
  expect(screen.getByText("To Do List")).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(7);
});
