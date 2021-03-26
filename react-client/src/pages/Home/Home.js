import React, { Component } from 'react';
import { CmsAPI, PyAPI } from '../../utils';
import { useCallback } from 'react';
import Hero from '../../components/Hero/Hero';
import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        
        const { promoted } = this.props;
        let prom, promPass = promoted.length > 0;
        if(promPass) {
            prom = promoted[0];
        };

        return(
            <section className="Home">

                {promPass ? <Hero prom={prom} /> : null}

                <section className="text-center">

                    <h1>Products and Therapy!</h1>

                    <div className="Home-subsection row no-gutters">
                        <div className="col-4">
                            <p className="h3">Product Section</p>

                            <p>
                                We have trillions of Products
                                tailored to you!
                            </p>
                        </div>

                        <div className="col-4">
                            <p className="h3">Therapy Section</p>

                            <p>
                                We have therapies for sale,
                                therapies that other experts
                                have often looked over.
                            </p>
                        </div>
                    </div>

                </section>
    
            </section>
        )
    };
}

export default Home;