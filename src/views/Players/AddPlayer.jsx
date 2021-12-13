import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerNewForm from '../../components/Player/PlayerNewForm';
import { createPlayer } from '../../services/players';

export default function AddPlayer(){
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();



  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await createPlayer({ name, position, teamId });
    history.push(`/players/${resp[0].id}`);
  };

  return (
    <div>
      <fieldset>
        <lengend>Add New Player</lengend>
        <PlayerNewForm 
          name={name}
          position = {position}
          teamId = {teamId}
          handleSubmit={handleSubmit}
          setName={setName}
          setPosition={setPosition}
          setTeamId = {setTeamId}
        />
      </fieldset>
    </div>
  );
}