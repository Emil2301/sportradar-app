import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalGoals from './TotalGoals';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('TotalGoals component', () => {
  const mockStore = configureMockStore();
  it('shows on the the number of scored goals by all teams returned from countTotalGoals function', () => {
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
    });
    render(
      <Provider store={store}>
        <TotalGoals />
      </Provider>
    );
    expect(screen.getByText('Total goals: 10')).toBeInTheDocument();
  });
});
