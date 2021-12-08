import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';


function TeamList(){
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function equipos(){
      const teamsData = await getTeams();
      setTeams(teamsData);
    }
    equipos();

  }, []);

  return (
    <div>
      <h1> Team List </h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              {team.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamList;