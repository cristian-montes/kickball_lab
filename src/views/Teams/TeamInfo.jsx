import { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';

function TeamInfo(){
  const [team, setTeam] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    async function equipoById(){
      const equipoData = await getTeamById();
      setTeam(equipoData);
      setIsLoading(false);
    }
    equipoById();
  }, []);

  if (isLoading) return <h1>Loading Information</h1>;
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>From {team.city}, {team.state}</h2>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {player.name};
            </li>  
          );
        })}
      </ul>
    </div>
  );
}

export default TeamInfo;