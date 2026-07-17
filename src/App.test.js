import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /complex things/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work');
});
