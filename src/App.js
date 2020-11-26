import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import FormWithImage from './components/Form/Form';
import TShirt from './components/T-shirt/tShirt';
import Header from './components/LandingPage/Header/Header';

// it is a project for testing us, so i am declaring the route and component names as given in the doc file  

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path='/landingPage' >
            <LandingPage></LandingPage>
          </Route>

          <Route path='/theFormPart' >
            <Header />
            <FormWithImage></FormWithImage>
          </Route>

          <Route path='/T-shirt' >
            <Header />
            <TShirt></TShirt>
          </Route>

          <Route exact path='/' >
            <LandingPage></LandingPage>
          </Route>
          <Route exact path='*' >
            <Header />
            <h2>page not found</h2>
          </Route>

        </Switch>
      </Router>

    </>
  );
}

export default App;