import './App.css';
import { Classroom } from './Components/Classroom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './Components/pages/About';
import Header from './Components/layout/header';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Switch>
              <Route exact path='/'>
                  <Classroom nom='JS Dev' />
              </Route>
              <Route path="/about" component={About} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
