import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './Box';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Box component', () => {
  const mockStore = configureMockStore();
  it('shows so many matches as are in the store', () => {
    const store = mockStore({
      matches: [
        {
          host: {
            name: 'Zambia',
            scoredGoals: 1,
          },
          guest: { name: 'Madagascar', scoredGoals: 2 },
        },
        {
          host: {
            name: 'Uruguay',
            scoredGoals: 3,
          },
          guest: { name: 'Nicaragua', scoredGoals: 4 },
        },
      ],
      buttonState: 'Restart',
    });
    render(
      <Provider store={store}>
        <Box />
      </Provider>
    );
    expect(screen.getByText('Zambia vs Madagascar')).toBeVisible();
    expect(screen.getByText('Uruguay vs Nicaragua')).toBeVisible();
    expect(screen.getByText('Total goals: 10')).toBeVisible();
    expect(screen.getByText('Restart')).toBeVisible();
  });
});
