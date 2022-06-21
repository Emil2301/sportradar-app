import React from 'react';
import { render, screen } from '@testing-library/react';
import Teams from './Teams';

describe('Teams component', () => {
  it('shows on the screen first team and second team passed', async () => {
    render(<Teams firstTeamName="Hungary" secondTeamName="Austria" />);
    expect(screen.getByText('Hungary vs Austria')).toBeInTheDocument();
  });
});
