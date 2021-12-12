import { useEffect, useState } from 'react';
import { getPlayerById } from '../../services/players';

function PlayerInfo({ match }){
  const { playerId } = match.params;
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    async function jugadorId(){
      const jugadorData = await getPlayerById(playerId);
      setPlayer(jugadorData);
      setIsLoading(false);
    }
    jugadorId();
    
  }, [playerId]);

  if (isLoading) return <h1>Loading Information</h1>;

  return (
    <div>
      <h1>{player.name}</h1>
      <h3>Position {player.position}</h3>
      <h3>Team: {player.teams.name}</h3>
    </div>
  );
}

export default PlayerInfo;