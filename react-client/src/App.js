import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreHome from './pages/PreHome/PreHome';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>

          <Route exact path="/" component={ PreHome }/>

            <Route exact path="/hallo"
              render={() => {
                return <div>Hallo</div>
              }} />


        </Switch>
      </Router>



    </div>
  );
}

export default App;
