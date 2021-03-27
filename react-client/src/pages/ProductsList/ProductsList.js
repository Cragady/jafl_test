import React, { Component } from 'react';
import { SubView } from '../../components';
import './ProductsList.css';

export class ProductsList extends Component {

    render() {
        let { products, therapies } = this.props,
            products_pass = products.length > 0,
            therapies_pass = therapies.length > 0,
            complete_arr = [];
            
        products_pass && products.forEach(prod => {
            prod.prodType = "product";
            complete_arr.push(prod);
        });
        
        therapies_pass && therapies.forEach(ther => {
            ther.prodType = "therapy";
            complete_arr.push(ther);
        });
            
        let complete_pass = complete_arr.length > 0;

        return (
            <section className="ProductsList-section">
                <h1 className="ProductsList-h1">List of Everything</h1>

                <section className="ProductsList-dump container ">
                    {complete_pass && complete_arr.map((item, i) => {
                        return <SubView key={"prod-or-service-" + item.name + "-" + i} allProds={item} />
                    })}
                </section>
            </section>
        )
    }
}