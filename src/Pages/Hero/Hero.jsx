import "./Hero.css"
import menu from "../../assets/images/icons/whitemenu_icon_S.png"
import hero from "../../assets/images/photos/hero_mobile.jpg"

function Hero() {
  return (
    <>
        <section id="hero">
            <img className="heroPhoto" src={hero} alt="Laptop et café"></img>
            <div className="heroContent">
                <div className="tophead">
                    <h1>Susana de Ory</h1>
                    <h2>Portfolio Développeuse Front End</h2>
                </div>
                <img className="heroIcon" src={menu} alt="Web menu"></img>
            </div>
            
        </section>
    </>
  )
}

export default Hero
