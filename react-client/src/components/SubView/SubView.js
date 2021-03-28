import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CmsAPI } from '../../utils';
import './SubView.css';

export class SubView extends Component {

    render() {
        const { allProds, switchSwapper } = this.props;
        const { name, picture, description, prodType, id } = allProds;
        let prodUrl = `/${prodType}/prdsrv+id=${id}`
        return(
            <section className="SubView-section rounded m-3">

                { name && <Link to={prodUrl} switchSwapper={switchSwapper} ><p className="h4">{name}</p></Link> }
                <div className="row no-gutters">
                    { picture && <div className="img-overlay-cust">
                        <Link to={prodUrl} onClick={switchSwapper} ><img className="SubView-img img-fluid" alt={"product " + name} src={CmsAPI.CmsUrl + picture[0].url} /></Link>
                        <Link to={prodUrl} onClick={switchSwapper} ><div className="view-destroyer">&nbsp;</div></Link>
                    </div>}
                    { description && <p className="col ml-5 mb-5">{description}</p>}
                </div>

                <Link to={prodUrl} onClick={switchSwapper} ><button className="btn btn-success mt-5">Check it out!</button></Link>
                
            </section>
        )
    }
}
