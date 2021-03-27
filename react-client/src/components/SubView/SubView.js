import React, { Component } from 'react';
import { CmsAPI } from '../../utils';
import './SubView.css';

export class SubView extends Component {

    render() {
        const { name, picture, description, prodType, id } = this.props.allProds;
        let prodUrl = `/${prodType}/prdsrv+id=${id}`
        return(
            <section className="SubView-section rounded m-3">

                { name && <a href={prodUrl}><p className="h4">{name}</p></a> }
                <div className="row no-gutters">
                    { picture && <div className="img-overlay-cust">
                        <a href={prodUrl}><img className="SubView-img img-fluid" alt={"product " + name} src={CmsAPI.CmsUrl + picture[0].url} /></a>
                        <a href={prodUrl}><div className="view-destroyer">&nbsp;</div></a>
                    </div>}
                    { description && <p className="col ml-5 mb-5">{description}</p>}
                </div>

                <a href={prodUrl}><button className="btn btn-success mt-5">Check it out!</button></a>
                
            </section>
        )
    }
}
