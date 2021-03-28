import React, { Component } from 'react';
import { CmsAPI, Misc, PyAPI } from '../../utils';
import './Cart.css';

export class Cart extends Component {

    submitTransaction = (items, total) => {
        let data = {
            id: "",
            date: "03-03-03 05:05:05",
            items: items.toString(),
            total: total.toString(),
            updated_at: "03-03-03 05:05:05"
        }

        PyAPI.createTransaction(data)
            .then(res => {
                this.props.emptyCart();
            })
            .catch(err => {
                console.error(err);
            })
    }

    cartlet = (props, key) => {
        const { name, picture, price, quantity } = props;
        return (<div className="cartlet rounded" key={"cart-item-" + key} >
            <strong>Name:</strong> {name}<br />
            <img className="Cart-img" src={CmsAPI.CmsUrl + picture[0].url} alt={"product pic of " + name} /><br />
            <strong>Price:</strong> {Misc.readablePrice(price)}<br />
            <strong>Quantity:</strong> {quantity}<br />
            <button className="btn btn-danger" onClick={() => {this.props.removeFromCart(key)}}>Remove :(</button>
        </div>)
    }

    render() {
        const { cart } = this.props;
        let carted = [], lenCart = 0, total = 0;

        cart && cart.length > 0 ? cart.forEach((item, i) => {
            lenCart ++;
            total += item.price;
            carted.push(this.cartlet(item, i));
            if(i === cart.length - 1) {
                carted.push(<section className="totals-section"key= "totals-section" >
                    <p><strong>Total Items:</strong> {lenCart}</p>
                    <p><strong>Total Price:</strong> ${Misc.readablePrice(total)}</p>
                    <button className="btn btn-success purchase-btn" onClick={() => {this.submitTransaction(lenCart, total)}}>Purchase!</button>
                    <button className="ml-3 btn btn-danger" onClick={this.props.emptyCart} >Empty Cart D:</button>
                </section>);
            }
        }) : carted.push(<h1 key="empty-cart">
            Looks like your cart is empty! Get ta buyin!
        </h1>)
        
        return (
            <section className="Cart-section">
                <div className="container">
                    <div className="mb-2">
                        {carted.length > 5 && carted[carted.length -1]}
                    </div>
                    {carted}
                </div>
            </section>
        )
    }
}