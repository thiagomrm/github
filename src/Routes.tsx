import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GitSearch from './pages/GitSearch';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/gitsearch" component={GitSearch}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;