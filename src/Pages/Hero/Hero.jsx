import "./Hero.css"
import Button from "../../DRY/Button.jsx"
import Menu from "../../DRY/Menu.jsx"
import menu from "../../assets/images/icons/whitemenu.svg"
import hero from "../../assets/images/photos/hero.avif"
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
    return (
        <>
            <section id="hero">
                <img src={hero} alt="Hero: laptop et café" className="heroPhoto" />
                <section className="heroContent">
                    <div className="tophead">
                        <h1>Susana de Ory</h1>
                        <h2>Portfolio Développeuse Front End</h2>
                    </div>
                    <Button className="buttonGhost" ariaLabel="Menu principal" onClick={() => setOpen(!open)}><img className="heroIcon" type="button" src={menu} alt="Web menu"></img></Button>
                    {open && <Menu menuOptions = {buttonry} className="headerMenu" closeMenu={() => setOpen(false)} />}
                </section>            
            </section>
        </>
    )
}

export default Hero
