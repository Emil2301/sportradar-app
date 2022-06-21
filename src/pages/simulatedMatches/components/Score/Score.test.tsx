import React from 'react';
import { render, screen } from '@testing-library/react';
import Score from './Score';

describe('Score component', () => {
  it('shows on the screen numbers of goals of first and second team passed', async () => {
    render(<Score firstTeamGoalsScored={1} secondTeamGoalsScored={2} />);
    expect(screen.getByText('1:2')).toBeInTheDocument();
  });
});
