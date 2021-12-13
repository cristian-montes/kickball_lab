import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePlayerById, getPlayers } from '../../services/players';

function PlayerList(){
  const [players, setPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadPlayers = async () => {
    const playersData = await getPlayers();
    setPlayers(playersData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleDeletePlayer = async ({ id, name }) => {
    const affirmationToDeletePlayer = confirm(`Would you like to delete player ${name}`);

    if (affirmationToDeletePlayer){
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

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
              {/* <Link to={`/players/update/${player.id}`}>
                <button>
                  update
                </button>
              </Link> */}
            
              <button
                type="button"
                aria-label={`delete ${player.id}`}
                onClick={() => handleDeletePlayer({ id: player.id, name: player.name })}
              >
                delete
              </button>

            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;