import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';

test('true is true', () => {
    expect (true).toBeTruthy;
});

test('does render first question text by default', () => {
    render (<Provider store={store}>
          <App />
      </Provider>);
    const firstQuestionText = screen.getByRole('heading');
    expect(firstQuestionText).toHaveTextContent('Water...');
  });

test('does not render second question text before clicking next', () => {
    render (<Provider store={store}>
            <App />
        </Provider>);
    const firstQuestionText = screen.getByRole('heading');
    expect(firstQuestionText).not.toHaveTextContent('Fire...');
});

test('does render second question text after clicking next', () => {
    render (<Provider store={store}>
            <App />
        </Provider>);
    fireEvent.click(screen.getByTestId('next-question-button'));
    const firstQuestionText = screen.getByRole('heading');
    expect(firstQuestionText).toHaveTextContent('Fire...');
});
