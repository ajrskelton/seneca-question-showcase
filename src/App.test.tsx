import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

test('renders first question test', () => {
  render (<Provider store={store}>
        <App />
    </Provider>);
  const firstQuestionText = screen.getByRole('heading');
  expect(firstQuestionText).toHaveTextContent('Water...');
});

test('does not render second question text', () => {
    render (<Provider store={store}>
            <App />
        </Provider>);
    const firstQuestionText = screen.getByRole('heading');
    expect(firstQuestionText).not.toHaveTextContent('Fire...');
});
