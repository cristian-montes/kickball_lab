import { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';

function TeamInfo({ match }){
  const { idOfTeam } = match.params;
  const [team, setTeam] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    async function equipoById(){
      const equipoData = await getTeamById(idOfTeam);
      setTeam(equipoData);
      setIsLoading(false);
    }
    equipoById();
  }, [idOfTeam]);

  if (isLoading) return <h1>Loading Information</h1>;
  return (
    <div>
      <h1>{team.name}</h1>
      <h2>From {team.city}, {team.state}</h2>
      <ul>
        <h4> List of Players </h4>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              <p> Position - {player.position}, Name - {player.name}</p>
            </li>  
          );
        })}
      </ul>
    </div>
  );
}

export default TeamInfo;