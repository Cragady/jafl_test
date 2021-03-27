import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, PreHome, Transactions, ProductsList, Cart} from './pages';
import { Nav, Product, Therapy } from './components';
import { CmsAPI } from './utils';

class App extends Component {
  state = {
    products: [],
    therapies: [],
    cart: []
  }

  componentDidMount(){
    Promise.all([CmsAPI.getProducts(), CmsAPI.getTherapies()])
      .then(res => {
        this.setState({
          products: res[0].data,
          therapies: res[1].data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const products = this.state.products;
    const promoted = [];
    const all_products = [];

    products !== undefined && products.length > 0 && products.forEach(product => {
      if(product.promoted){
        promoted.push(product);
      }

      all_products.push(product);

    })
    return (
      <div className="App">

        <Router>

          <Nav />
        
          <Switch>
  
            <Route exact path="/prehome" component={ PreHome }/>
            
            <Route path="/product" component={ Product } />

            <Route path="/therapy" component={ Therapy } />

            <Route path="/transactions" component={ Transactions } />

            <Route path="/productslist" render={props => { return <ProductsList products={this.state.products} therapies={this.state.therapies} />}} />

            <Route path="/cart" component={ Cart } />
  
            <Route exact path="/" render={(props) => { return <Home promoted={promoted} products={all_products} /> } } />
  
            <Route path="/"
              render={() => {
                return <div>Hallo, you shouldn't be here. <a href="/">Please go back.</a></div>
            }} />
  
          </Switch>
        </Router>
  
  
  
      </div>
    );
  }
}

export default App;
