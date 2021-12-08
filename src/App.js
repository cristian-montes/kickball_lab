import './App.css';
import Home from './views/Home/Home';
import TeamList from './views/Teams/Team.List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <TeamList />
      </header>
    </div>
  );
}

export default App;
