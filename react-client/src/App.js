import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreHome from './pages/PreHome/PreHome';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import { CmsAPI, PyAPI } from './utils';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount(){
    this.grabProducts();
  }

  grabProducts = () => {
    CmsAPI.getProducts()
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const products = this.state.products;
    const promoted = [];
    const regular_products = [];

    products !== undefined && products.length > 0 && products.forEach(product => {
      if(product.promoted){
        console.log(product);
        promoted.push(product);
      }

      regular_products.push(product);

    })
    return (
      <div className="App">

        <Router>

          <Nav />
        
          <Switch>
  
            <Route exact path="/prehome" component={ PreHome }/>
            
  
            <Route exact path="/hallo"
              render={() => {
                return <div>Hallo, you shouldn't be here. <a href="/">Please go back.</a></div>
            }} />
  
            <Route exact path="/" render={(props) => { return <Home promoted={promoted} /> } } />
  
  
          </Switch>
        </Router>
  
  
  
      </div>
    );
  }
}

export default App;
