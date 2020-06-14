import React from 'react';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/index'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
