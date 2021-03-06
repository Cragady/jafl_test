import { Link } from 'react-router-dom';
import './Hero.css';

export const Hero = function(props) {
    const { prom, switchSwapper } = props;

    return(
        <section className="Hero">
            <img className="Hero-Banner" alt={"promotoed product " + prom.name} src={process.env.REACT_APP_CMS_API + prom.picture[0].url} />
            <h2 className="Hero-v1 Hero-text">Look At This!</h2>
            <h3 className="Hero-v2 Hero-text">Mega Buying Deal!</h3>
            <h2 className="Hero-v3 Hero-text">BUY THE HEROES!</h2>
            <Link to={"/product/prdsrv+id=" + prom.id} onClick={switchSwapper} ><button className="btn btn-success Hero-btn">Gotta Click</button></Link>
        </section>
    )
}

