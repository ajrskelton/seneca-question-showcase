import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first question test', () => {
  render(<App />);
  const firstQuestionText = screen.getByRole('heading');
  expect(firstQuestionText).toHaveTextContent('Water...');
});

test('does not render second question text', () => {
    render(<App />);
    const firstQuestionText = screen.getByRole('heading');
    expect(firstQuestionText).not.toHaveTextContent('File...');
  });
  