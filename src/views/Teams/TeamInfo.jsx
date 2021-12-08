import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getTeamById } from '../../services/teams';

function TeamInfo(){
  const { idOfTeam } = useParams();
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
              {player.position} - {player.name};
            </li>  
          );
        })}
      </ul>
    </div>
  );
}

export default TeamInfo;