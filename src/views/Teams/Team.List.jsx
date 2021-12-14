import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../services/teams';

function TeamList(){
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadTeams = async () => {
    setIsLoading(true);
    const teamsData = await getTeams();
    setTeams(teamsData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadTeams();
  }, []);
  
  const handleDeleteTeam = async ({ id, name }) => {
    const affirmationToDeleteTeam = confirm(`Would you like to delete team ${name}`);

    if (affirmationToDeleteTeam){
      await deleteTeamById(id);
      await loadTeams();
    }

  };


  if (isLoading) return <h1>Loading Information</h1>;
  return (
    <div>
      <h1> Team List </h1>
      <Link to={'/newTeam'} className="App-link">
        Add a Team
      </Link>
   
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id} >
              <Link to={`/teams/${team.id}`} className="App-link" > 
                {team.name} 
              </Link>
              <Link to={`/teams/update/${team.id}`}>
                <button>
                  update
                </button>
              </Link>
            
              <button
                type="button"
                aria-label={`delete ${team.id}`}
                onClick={() => handleDeleteTeam({ id: team.id, name: team.name })}
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

export default TeamList;