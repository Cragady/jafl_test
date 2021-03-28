import React, { Component } from 'react';
import { CmsAPI, UrlParser, Misc } from '../../utils';
import './Therapy.css';

export class Therapy extends Component {

    state = {
        therapy: []
    }

    componentDidMount() {
        let url_id = UrlParser.getIdFromUrl(window.location.pathname);
        CmsAPI.getTherapy(url_id)
            .then(res => {
                this.setState({
                    therapy: [res.data]
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    addTherapy = (data) => {
            this.props.addToCart(data);
    }

    render() {
        let therapy_pass = this.state.therapy.length > 0,
            therapy_state = this.state.therapy[0],
            therapy_component = null;

        if(therapy_pass) {
            const { date_available, description, hourly_price, name, picture } = therapy_state;
            therapy_component = <section className="Therapy-section pt-3">
                <div className="container rounded Therapy-container">
                    <h1>{name}</h1>
                    <img className="Therapy-img img-fluid mb-3" src={CmsAPI.CmsUrl + picture[0].url} alt={"Therapy image " + name} />
                    <h2>Description</h2>
                    <p className="Therapy-description rounded p-3">{description}</p>
                    <p><span className="Therapy-point-text">Hourly Price:</span> {Misc.readablePrice(hourly_price)}</p>
                    <p><span className="Therapy-point-text">Date Available:</span> {date_available}</p>
                    <button className="btn btn-primary Therapy-btn mb-3"
                        onClick={() => this.addTherapy({
                            quantity: 1,
                            price: hourly_price,
                            name: name,
                            picture: picture
                        })}>
                            Add to Cart
                        </button>
                </div>
            </section>
        }


        return ( therapy_component )
    }
}

