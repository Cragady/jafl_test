import React, { Component } from 'react';
import { CmsAPI } from '../../utils';
import './SubView.css';

export class SubView extends Component {

    render() {
        const { name, picture, description, prodType, id } = this.props.allProds;
        return(
            <section className="SubView-section rounded m-3">

                { name && <p className="h4">{name}</p> }
                <div className="row no-gutters">
                    { picture && <img className="SubView-img img-fluid mb-5" alt={"product " + name} src={CmsAPI.CmsUrl + picture[0].url} />}
                    { description && <p className="col ml-5 mb-5">{description}</p>}
                </div>

                <a href={"/" + prodType + "/prdsrv+id=" + id}><button className="btn btn-success">Check it out!</button></a>
                
            </section>
        )
    }
}
