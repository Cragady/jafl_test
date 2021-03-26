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
                product_component = <section className="Product-section">
                    <h1>{name}</h1>
                    <img className="Product-img img-fluid mb-3" src={CmsAPI.CmsUrl + picture[0].url} alt={"Product image " + name} />
                    <h2>Description</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Available: {quantity}</p>
                    <button className="btn btn-primary Product-btn">Add to Cart</button>
                </section>
            }

        return ( product_component );
    }
}

