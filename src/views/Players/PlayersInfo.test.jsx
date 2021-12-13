import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PlayerInfo from './PlayersInfo';

it('should render a detail view of a player', async () => {
  render(
    <MemoryRouter>
      <PlayerInfo
        match={{ params: { playerId: '1' } }} 
      />
    </MemoryRouter>
  );

  const playerName = await screen.findByText('Pollito', { exact: false });

  expect(playerName).toBeInTheDocument();
});