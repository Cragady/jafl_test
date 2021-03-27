import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    state = {
        switch: true
    }

    switchSwapper = () => {
        this.setState(prevState => ({
            switch: !prevState.switch
        }))
    }

    render() {
        const pathname = window.location.pathname;
        
        return(
            <section className="Nav">


                <ul className="nav nav-cust">
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/"
                            children="ByMoore!"
                            className="Nav-home-icon nav-link active"
                            id="Head-Nav"
                            onClick={this.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link 
                            to="/" 
                            children="Home"
                            className={
                                pathname === "/" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/transactions"
                            children="Transactions"
                            className={
                                pathname === "/transactions" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/productslist"
                            children="Products List"
                            className={
                                pathname === "/productslist" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/cart"
                            children="Cart"
                            className={
                                pathname === "/cart" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.switchSwapper}
                        />
                    </li>
    
    
                </ul>
            </section>
        );        
    };
}
