import './Hero.css';

function Hero(props) {
    const { prom } = props;

    console.log(process.env.REACT_APP_CMS_API)
    return(
        <section className="Hero">
            <img className="Hero-Banner" src={process.env.REACT_APP_CMS_API + prom.picture[0].url} />
            <h2 className="Hero-v1 Hero-text">Look At This!</h2>
            <h3 className="Hero-v2 Hero-text">Mega Buying Deal!</h3>
            <h2 className="Hero-v3 Hero-text">BUY THE HEROES!</h2>
            <button className="btn btn-success Hero-btn">Gotta Click</button>
        </section>
    )
}

export default Hero;
