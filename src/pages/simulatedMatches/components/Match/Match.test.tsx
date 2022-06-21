import React from 'react';
import { render, screen } from '@testing-library/react';
import Match from './Match';

describe('Match component', () => {
  it('shows on the screen numbers of goals of first and second team passed', async () => {
    render(
      <Match
        host={{ name: 'Greece', scoredGoals: 2 }}
        guest={{ name: 'Colombia', scoredGoals: 3 }}
      />
    );
    expect(screen.getByText('2:3')).toBeInTheDocument();
    expect(screen.getByText('Greece vs Colombia')).toBeInTheDocument();
  });
});
