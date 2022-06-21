import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../../../../store/index';

describe('Button component', () => {
  it('shows the button state that is in store on initialization', () => {
    render(
      <Provider store={store}>
        <Button />
      </Provider>
    );
    expect(screen.getByText('Start')).toBeInTheDocument();
  });
  it('shows on the button state that is in store, after click "Start", it changes to "Finish", and then after click "Finish" it changes to "Restart"', async () => {
    render(
      <Provider store={store}>
        <Button />
      </Provider>
    );
    userEvent.click(screen.getByText('Start'));
    expect(await screen.findByText('Finish')).toBeInTheDocument();
    userEvent.click(screen.getByText('Finish'));
    expect(await screen.findByText('Restart')).toBeInTheDocument();
  });
});
