import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import PlayerInfo from './views/Players/PlayersInfo';
import PlayerList from './views/Players/PlayersList';
import TeamList from './views/Teams/Team.List';
import TeamInfo from './views/Teams/TeamInfo';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Switch>
          <Route 
            path='/' exact component={Home}
          />
          <Route 
            path='/teams' 
            exact 
            render={(routerProps) =>(<TeamList {...routerProps} />)}
          />
          <Route 
            path='/teams/:idOfTeam' 
            exact 
            render={(routerProps) =>(<TeamInfo {...routerProps} />)}
          />
          <Route 
            path='/players' 
            exact 
            render={(routerProps) =>(<PlayerList {...routerProps} />)}
          />
          <Route 
            path='/players/:playerId' 
            exact 
            render={(routerProps) =>(<PlayerInfo {...routerProps} />)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
