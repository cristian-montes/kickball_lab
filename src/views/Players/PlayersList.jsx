import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

function PlayerList(){
  const [players, setPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function jugadores(){
      const playersData = await getPlayers();
      setPlayers(playersData);
      setIsLoading(false);
    }
    jugadores();
  }, []);

  if (isLoading) return <h1>Loading Information</h1>;
  return (
    <div>
      <h1> The Players List </h1>
      <Link to={'/newPlayer'} className="App-link">
        Add Player
      </Link>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} > 
                {player.name} 
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;