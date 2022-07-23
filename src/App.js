import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Cities from './Components/Cities/Cities';
import CityDetail from './Components/CityDetail/CityDetail';
import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" component={NavBar}/>
      <Route exact path="/" component={Cities}/>
      <Route exact path="/:id" component={CityDetail}/>
      <Route path="*">
        <Redirect to="/"/>
      </Route>
    </div>
  );
}

export default App;
