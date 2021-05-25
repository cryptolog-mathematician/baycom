import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Responsivedesign from './components/Responsivedesign';
import Datenbanken from './components/Datenbanken';
import Kontakt from './components/Kontakt';
import Byfooter from './components/Byfooter';
import HostingundWartung from './components/HostingundWartung';

function App() {
  return (
    <Router>
      <div className="container-fluid text-center p-0 w-100">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/webdesign">
            <Responsivedesign />
          </Route>
          <Route path="/datenbanken">
            <Datenbanken />
          </Route>
          <Route path="/kontakt">
            <Kontakt />
          </Route>
          <Route path="/hostingundwartungservices">
            <HostingundWartung />
          </Route>
        </Switch>
        <Byfooter/>
      </div>
    </Router>
  );
}

export default App;
