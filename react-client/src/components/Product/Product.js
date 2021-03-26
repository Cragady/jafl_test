import React, { Component } from 'react';
import { CmsAPI, UrlParser } from '../../utils';
import './Product.css';

export class Product extends Component {

    state = {
        product: []
    }

    componentDidMount() {
        let url_id = UrlParser.getIdFromUrl(window.location.pathname);
        CmsAPI.getProduct(url_id)
            .then(res => {
                this.setState({
                    product: [res.data]
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        let product_pass = this.state.product.length > 0,
            product_state = this.state.product[0],
            product_component = null;

        if(product_pass) {
            const { name, description, price, quantity, picture } = product_state;
            product_component = <section className="Product-section pt-3">
                <div className="container rounded Product-container">
                    <h1>{name}</h1>
                    <img className="Product-img img-fluid mb-3" src={CmsAPI.CmsUrl + picture[0].url} alt={"Product image " + name} />
                    <h2>Description</h2>
                    <p className="Product-description rounded p-3">{description}</p>
                    <p><span className="Product-point-text">Price:</span> {price}</p>
                    <p><span className="Product-point-text">Available:</span> {quantity}</p>
                    <button className="btn btn-primary Product-btn mb-3">Add to Cart</button>
                </div>
            </section>
        }

        return ( product_component );
    }
}

