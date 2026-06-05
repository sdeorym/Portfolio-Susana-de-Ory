import "./Hero.css"
import Button from "../../DRY/Button.jsx"
import Menu from "../../DRY/Menu.jsx"
import menu from "../../assets/images/icons/whitemenu.svg"
import heroS from "../../assets/images/photos/hero_mobile.avif"
import heroM from "../../assets/images/photos/hero_tablet.avif"
import heroL from "../../assets/images/photos/hero_desktop.jpg"
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
                <picture className="heroPhoto">
                    <source media="(min-width: 1025px)" srcSet={`${heroL} 1440w`} />
                    <source media="(min-width: 769px)" srcSet={`${heroM} 1424w`} />
                    <img src={heroS} alt="Hero: laptop et café" sizes="100vw" srcSet={`${heroS} 375w`} />
                </picture>

                <navbar className="heroContent">
                    <div className="tophead">
                        <h1>Susana de Ory</h1>
                        <h2>Portfolio Développeuse Front End</h2>
                    </div>
                    <Button className="buttonGhost" onClick={() => setOpen(!open)}><img className="heroIcon" type="button" src={menu} alt="Web menu"></img></Button>
                    {open && <Menu menuOptions = {buttonry} className="headerMenu" closeMenu={() => setOpen(false)} />}
                </navbar>            
            </section>
        </>
    )
}

export default Hero
