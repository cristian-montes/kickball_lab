import { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';


function TeamList(){
  const [teams, setTeams] = useState([]);

  console.log('here', teams);

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
              
          })}
      </ul>
    </div>
  );
}

export default TeamList;