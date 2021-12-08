// import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import TeamList from './views/Teams/Team.List';

function App() {
  return (
    <div className="App-header">
      <Home />
      <TeamList />
    </div>
  );
}

export default App;
