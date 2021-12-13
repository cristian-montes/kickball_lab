export default function PlayerUpdateForm({
  name,
  position,
  handlePlayerUpdate,
  setName,
  setPosition,
  teamId,
  setTeamId
}){
  return (
    <form onSubmit={handlePlayerUpdate}>
      <label htmlFor="name"> Name: </label>
      <input 
        id='name'
        name='name'
        type='text'
        value = {`${name}`}
        onChange={(event) => setName(event.target.value)} 
      />
      <label htmlFor='position'> Position: </label>
      <input 
        id='position'
        name='position'
        type='text'
        value = {position} 
        onChange={(event) => setPosition(event.target.value)}
      />
    
      <label htmlFor='teamId'> Team ID: </label>
      <input 
        id='teamId'
        name='teamId'
        type='text'
        value = {teamId}
        onChange={(event) => setTeamId(event.target.value)}
      />
      <button type='submit' aria-label='Update a team'>
             Update
      </button>
    
    </form>
  );
}