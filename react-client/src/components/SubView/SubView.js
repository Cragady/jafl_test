import React, { Component } from 'react';
import { CmsAPI } from '../../utils';
import './SubView.css';

export class SubView extends Component {

    render() {
        const { name, picture } = this.props.allProds;
        return(
            <section className="Subview-section m-3">

                { name && <p className="h4">{name}</p> }
                { picture && <img className="SubView-img img-fluid" alt={"product " + name} src={CmsAPI.CmsUrl + picture[0].url} />}
                
            </section>
        )
    }
}
