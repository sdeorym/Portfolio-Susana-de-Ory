import "./Hero.css"
import Button from "../../DRY/Button.jsx"
import Menu from "../../DRY/Menu.jsx"
import menu from "../../assets/images/icons/whitemenu_icon_S.png"
import hero from "../../assets/images/photos/hero_mobile.jpg"
import { useState, useEffect } from "react"

function Hero() {
    const [open, setOpen] = useState(false);

    const buttonry = [
        {
            "id": 0,
            "value": "About",
            "title": "À propos",
            "link": "#about",
        },
        {
            "id": 1,
            "value": "projets",
            "title": "Mes projets",
            "link": "#projects",
        },
        {
            "id": 2,
            "value": "competences",
            "title": "Mes compétences",
            "link": "#competences",
        },
        {
            "id": 3,
            "value": "parcours",
            "title": "Mon parcours",
            "link": "#history",
        },
        {
            "id": 4,
            "value": "contact",
            "title": "Contact",
            "link": "#contact",
        }
    ]
    
    /* CAMBIA EL ESTADO DEL STATE CON UN USEEFFECT. */


/*OJO Para el menú tienes que cambiar el state a open cuando se le da al botón, y esto hace q se despliegue el menú en <Menu />;
cuando se da otra vez hay que cerrarlo para que no se muestre */
    console.log(open);
    return (
        <>
            <section id="hero">
                <img className="heroPhoto" src={hero} alt="Laptop et café" id="home"></img>
                <div className="heroContent">
                    <div className="tophead">
                        <h1>Susana de Ory</h1>
                        <h2>Portfolio Développeuse Front End</h2>
                    </div>
                    <Button className="buttonGhost" onClick={() => setOpen(!open)}><img className="heroIcon" type="button" src={menu} alt="Web menu"></img></Button>
                    {open && <Menu menuOptions = {buttonry} className="headerMenu"/>}
                </div>
                
            </section>
        </>
    )
}

export default Hero
