import './Projects.css'
import Select from "../../DRY/Select.jsx"
import CardS from "../../DRY/CardS.jsx"
import booki from "../../assets/images/projects/booki.avif"
import ohmy from "../../assets/images/projects/ohmyfood.avif"
import print from "../../assets/images/projects/print.avif"
import bluel from "../../assets/images/projects/bluel.avif"
import memoirs from "../../assets/images/projects/memoirs.avif"
import kasa from "../../assets/images/projects/kasa.avif"
import nina from "../../assets/images/projects/nina.avif"
import eventsweb from "../../assets/images/projects/724events.avif"
import argent from "../../assets/images/projects/argentBank.avif"
import lpg from "../../assets/images/projects/lpg.avif"
import { useState } from "react";


function Projects() {
    const [techno, setTechno] = useState("");

    const projects = [
        {
            "id": "0",
            "src": booki,
            "title": "Booki",
            "brief": "Développement d'une agence de voyages",
            "explanation": "Création de la page d'accueil de l'agence de voyages Booki ; l'information affichée est pour la destination Marseille",
            "stack": "HTML + CSS",
            "web": "https://sdeorym.github.io/booki/",
            "alt": "Capture d'écran du site Booki"
        },
        {
            "id": "1",
            "src": ohmy,
            "title": "Oh my food",
            "brief": "Développement d'un site pour réservation en restaurant",
            "explanation": "Création d'un site pour réserver une table et commander des plats en avance à l'arrivée au restaurant.<br>",
            "stack": "HTML + CSS + Sass",
            "web": "https://sdeorym.github.io/OhMyFood/index.html",
            "alt": "Capture d'écran du site Oh my food"
        },
        {
            "id": "2",
            "src": print,
            "title": "Print it!",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "https://sdeorym.github.io/printIt/",
            "alt": "Capture d'écran du site Print it!"
        },
        {
            "id": "3",
            "src": bluel,
            "title": "Sophie Bluel Architecte d'interieur",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "https://portfolio-sophie-bluel-lyart.vercel.app/",
            "alt": "Capture d'écran du site Sophie Bluel"
        },
        {           
            "id": "4",
            "src": memoirs,
            "title": "Mémoirs des cendres",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "https://memoires-des-cendres.alwaysdata.net/",
            "alt": "Capture d'écran du site Mémoirs des cendres"
        },
        {
            "id": "5",
            "src": kasa,
            "title": "Kasa",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React",
            "web": "https://kasa-phi-six.vercel.app/",
            "alt": "Capture d'écran du site Kasa"
        },
        {   
            "id": "6",
            "src": nina,
            "title": "Nina Carducci",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS",
            "web": "https://sdeorym.github.io/ninacarducci/",
            "alt": "Capture d'écran du site Nina Carducci"
        },
        {            
            "id": "7",
            "src": eventsweb,
            "title": "724 events",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React",
            "web": "https://724events-iota.vercel.app/",
            "alt": "Capture d'écran du site 724 events"
        },
        {            
            "id": "8",
            "src": argent,
            "title": "ArgentBank",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React + Redux Toolkit",
            "web": "https://argent-bank-frontend-omega.vercel.app/",
            "alt": "Capture d'écran du site ArgentBank"
        },
        {            
            "id": "9",
            "src": lpg,
            "title": "LPG Consulting",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React",
            "web":"https://lpgconsulting.fr/",
            "alt": "Capture d'écran du site LPG Consulting"
        }
    ]

    const changeStack = (value) => {
        setTechno(value);
    };
    const filteredProjects = ((techno != "Tous" && techno != "") ? (projects.filter(project => project.stack === techno)) : projects)

    const stacks = new Set(projects.map((project) => project.stack))
    console.log (techno);
    return (
        <section id="projects">
            <h3>Mes projets</h3>
            <div className="projectBoxes">
                <Select stacks = {Array.from(stacks)} onChange={(value) => (value ? changeStack(value) : changeStack(""))} />
                <CardS projects = {filteredProjects} technologies="Technologies :" />
            </div>
        </section>
    )
}

export default Projects