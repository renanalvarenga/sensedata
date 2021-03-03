import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('footer tests', () => {
  render(<Footer />);
  expect(screen.getByText("DESENVOLVIDO POR RENAN ALVARENGA")).toBeInTheDocument();
});
