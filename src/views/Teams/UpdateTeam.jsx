import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TeamUpdateForm from '../../components/Teams/TeamUpdateForm';
import { updateTeamById } from '../../services/teams';

export default function UpdateTeam({ match }){
  const { idOfTeam } = match.params;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  console.log('idOfTeam', idOfTeam);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedTeam = await updateTeamById(+idOfTeam, { name, city, state });
    history.push(`/teams/${updatedTeam[0].id}`);
  };

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