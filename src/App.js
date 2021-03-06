import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import PlayerInfo from './views/Players/PlayersInfo';
import PlayerList from './views/Players/PlayersList';
import TeamList from './views/Teams/Team.List';
import TeamInfo from './views/Teams/TeamInfo';
import AddTeam from './views/Teams/AddTeam';
import UpdateTeam from './views/Teams/UpdateTeam';
import AddPlayer from './views/Players/AddPlayer';
import UpdatePlayer from './views/Players/UpdatePlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App">
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

            <Route path='/newTeam' exact component={AddTeam} />
            
            <Route 
              path='/teams/update/:idOfTeam' 
              exact
              render={(routerProps)=> (<UpdateTeam {...routerProps} />)}
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
            <Route path='/newPlayer' exact component={AddPlayer} />
            <Route 
              path='/players/update/:idOfPlayer' 
              exact
              render={(routerProps)=> (<UpdatePlayer {...routerProps} />)}
            />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
