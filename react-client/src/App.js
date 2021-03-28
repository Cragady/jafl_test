import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, PreHome, Transactions, ProductsList, Cart} from './pages';
import { Nav, Product, Therapy } from './components';
import { CmsAPI, TopScroller } from './utils';

class App extends Component {
  state = {
    products: [],
    therapies: [],
    cart: [],
    browserSwitch: true
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

  switchSwapper = () => {
    this.setState(prevState => ({
      browserSwitch: !prevState.browserSwitch
    }))
  }

  addToCart = (val) => {
    this.setState({
      cart: [
        ...this.state.cart,
        val
      ]
    })
  }

  removeFromCart = (id) => {
    this.setState({
      cart: this.state.cart.filter((v, i) => {
        return id !== i
      })
    })
  }

  emptyCart = () => {
    this.setState({
      cart: []
    });
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

          <TopScroller />

          <Nav cartLength={this.state.cart.length} switchSwapper={this.switchSwapper} />
        
          <Switch>
  
            <Route exact path="/prehome" component={ PreHome }/>
            
            <Route path="/product" render={props => { return <Product addToCart={this.addToCart } /> } } />

            <Route path="/therapy" render={props => { return <Therapy addToCart={ this.addToCart } /> }} />

            <Route path="/transactions" component={ Transactions } />

            <Route path="/productslist" render={props => { return <ProductsList products={this.state.products} therapies={this.state.therapies} switchSwapper={this.switchSwapper} />}} />

            <Route path="/cart" render={props => { return <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} emptyCart={this.emptyCart} /> } } />
  
            <Route exact path="/" render={(props) => { return <Home promoted={promoted} products={all_products} switchSwapper={this.switchSwapper} /> } } />
  
            <Route path="/"
              render={() => {
                return <div>Hallo, you shouldn't be here. <Link to="/" onClick={this.switchSwapper} >Please go back.</Link></div>
            }} />
  
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
