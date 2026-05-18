import "./Hero.css"
import menu from "../../assets/images/icons/whitemenu.png"
import hero from "../../assets/images/photos/hero_mobile.jpg"

function Hero() {
  return (
    <>
        <div>
            <div className="tophead">
                <div>
                    <h1>Susana de Ory</h1>
                    <h2>Portfolio Développeuse Front End</h2>
                </div>
                <img className="topmenu" src={menu} alt="Icône Menu"></img>
            </div>
            <img className="heroPhoto" src={hero} alt="Laptop et café"></img>
        </div>
    </>
  )
}

export default Hero
