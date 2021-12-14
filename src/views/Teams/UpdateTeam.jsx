import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TeamUpdateForm from '../../components/Teams/TeamUpdateForm';
import { getTeamById, updateTeamById } from '../../services/teams';

export default function UpdateTeam({ match }){
  const { idOfTeam } = match.params;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();


  useEffect(() => {
    async function equipoById(){
      const equipoData = await getTeamById(idOfTeam);
      setName(equipoData.name);
      setCity(equipoData.city);
      setState(equipoData.state);
      setIsLoading(false);
    }
    equipoById();
  }, [idOfTeam]);


  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedTeam = await updateTeamById(+idOfTeam, { name, city, state });
    history.push(`/teams/${updatedTeam[0].id}`);
  };

  if (isLoading) return <h1>Loading Information</h1>;
  
  return (
    <div>
      <fieldset>
        <lengend>Update Team</lengend>
        <TeamUpdateForm
          name={name}
          city={city}
          state={state}
          handleUpdate ={ handleUpdate }
          setName={setName}
          setCity={setCity}
          setState={setState}
        />
      </fieldset>
    </div>
  );
}