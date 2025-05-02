
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the welcome heading', () => {
  render(<App />);
  const heading = screen.getByText(/welcome to my react app/i);
  expect(heading).toBeInTheDocument();
});

