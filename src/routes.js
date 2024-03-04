import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Game from './Pages/Game';
import Settings from './Pages/Settings';
import Ranking from './Pages/Ranking';
import Feedback from './Pages/Feedback';

function Routes() {
  return (
    <Switch>
      <Route path="/settings" component={ Settings } />
      <Route path="/games" component={ Game } />
      <Route path="/ranking" component={ Ranking } />
      <Route path="/feedback" component={ Feedback } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
