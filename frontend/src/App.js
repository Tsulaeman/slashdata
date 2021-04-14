import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Ngram from './containers/ngrams';
import Home from './containers/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/view">
          <Ngram />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
