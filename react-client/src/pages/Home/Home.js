import React, { Component } from 'react';
// import { CmsAPI, PyAPI } from '../../utils';
import { Link } from 'react-router-dom';
import { Hero } from '../../components';
import './Home.css';

export class Home extends Component {
    
    render() {
        
        const { promoted, products, switchSwapper } = this.props;
        let prom, promPass = promoted.length > 0;
        let prods = [], imgs = [], imgsPass, prodsPass = products.length > 0;
        if(promPass) {
            prom = promoted[0];
        };
        if(prodsPass) {
            products.forEach(prod => {
                imgs.push({id: prod.id, name: prod.name, url: process.env.REACT_APP_CMS_API + prod.picture[0].url})
                prods.push(prod);
            })
        }

        imgsPass = imgs.length > 0;

        return(
            <section className="Home">

                {promPass ? <Hero prom={prom} switchSwapper={switchSwapper} /> : null}

                <section className="text-center">

                    <h1>Products and Therapy!</h1>

                    <div className="Home-subsection row no-gutters">
                        <div className="col-4">
                            <p className="h3">Products</p>

                            <p>
                                We have trillions of Products
                                tailored to you!
                            </p>
                        </div>

                        <div className="col-4">
                            <p className="h3">Therapy</p>

                            <p>
                                We have therapies for sale,
                                therapies that other experts
                                have often looked over!
                            </p>
                        </div>
                    </div>
                    
                    <p className="h2 mb-5"><Link to="/productslist" onClick={switchSwapper} >Browse All Selections</Link></p>

                    <div className="Home-imgs-container row no-gutters">
                        {imgsPass && imgs.map((img, i) => {
                            return(<div key={"Home-anchor-img-" + i}>
                                <div className="Home-imgs-subcontainer">
                                    <Link to={"/product/prdsrv+id=" + img.id} onClick={switchSwapper} ><img className="Home-imgs-row img-fluid" src={img.url} alt={"Image row " + img.name} /></Link>
                                    <Link to={"/product/prdsrv+id=" + img.id} onClick={switchSwapper} ><div className="Home-destroyer">&nbsp;</div></Link>
                                </div>
                                <br />
                            </div>
                            )
                        })}
                    </div>

                </section>
    
            </section>
        )
    };
}

