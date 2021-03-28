import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {

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
                            onClick={this.props.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link 
                            to="/" 
                            children="Home"
                            className={
                                pathname === "/" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.props.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/transactions"
                            children="Transactions"
                            className={
                                pathname === "/transactions" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.props.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <Link
                            to="/productslist"
                            children="Products List"
                            className={
                                pathname === "/productslist" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.props.switchSwapper}
                        />
                    </li>
    
                    <li className="nav-item li-item-cust">
                        <div className="Nav-Cart">
                            <Link
                                to="/cart"
                                children="Cart"
                                className={
                                    pathname === "/cart" ? "nav-link active Cart-Link" : "nav-link inactive Cart-Link"
                                }
                                onClick={this.props.switchSwapper}
                            />
                            <Link className="a-popup" to="/cart" onClick={this.props.switchSwapper} ><div className="Cart-Popup">{this.props.cartLength}</div></Link>
                        </div>
                    </li>
    
                    {/* <li className="nav-item li-item-cust">
                        <Link
                            to="/hallo"
                            children="hallo"
                            className={
                                pathname === "/hallo" ? "nav-link active" : "nav-link inactive"
                            }
                            onClick={this.props.switchSwapper}
                        />
                    </li> */}
    
                </ul>
            </section>
        );        
    };
}
