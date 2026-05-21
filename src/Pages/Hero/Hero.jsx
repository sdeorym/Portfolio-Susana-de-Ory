import "./Hero.css"
import Button from "../../DRY/Button.jsx"
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
                <Button className="buttonGhost"><img className="heroIcon" type="button" src={menu} alt="Web menu"></img></Button>
            </div>
            
        </section>
    </>
  )
}

export default Hero
