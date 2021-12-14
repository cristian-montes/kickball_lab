import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerUpdateForm from '../../components/Player/PlayerUpdateForm';
import { updatePlayerById } from '../../services/players';

export default function UpdatePlayer({ match }){
  const { idOfPlayer } = match.params;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamId, setTeamId] = useState('');
  const history = useHistory();

  const handlePlayerUpdate = async (event) => {
    event.preventDefault();
    const updatedPlayer = await updatePlayerById(idOfPlayer, { name, position });
    history.push(`/players/${updatedPlayer[0].id}`);
  };

  return (
    <div>
      <fieldset>
        <legend> Update Player </legend>
        <PlayerUpdateForm
          name={name}
          position={position}
          teamId={teamId}
          handlePlayerUpdate={handlePlayerUpdate}
          setName={setName}
          setPosition={setPosition}
          setTeamId={setTeamId}
        />
      </fieldset>
    </div>
  );


}