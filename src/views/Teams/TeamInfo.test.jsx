import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import TeamInfo from './TeamInfo';

it('should render a detail view of a team', async ()=>{
  render(
    <MemoryRouter>
      <TeamInfo 
        match={{ params: { idOfTeam: '1' } }}
      />
    </MemoryRouter>
  );

  const teamName = await screen.findByText('Bridge City Sneakers', { exact: false });

  expect(teamName).toBeInTheDocument();
});