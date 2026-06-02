import './Projects.css'
import Select from "../../DRY/Select.jsx"
import CardS from "../../DRY/CardS.jsx"
import marseille from "../../assets/images/projects/marseille_mobile.jpg"
import restau from "../../assets/images/projects/restaus_mobile.jpg"
import skate from "../../assets/images/projects/skate_mobile.jpg"
import { useState } from "react";


function Projects() {
    const [techno, setTechno] = useState("");

    const projects = [
        {
            "id": "0",
            "src": marseille,
            "title": "Booki",
            "brief": "Développement d'une agence de voyages",
            "explanation": "Création de la page d'accueil de l'agence de voyages Booki ; l'information affichée est pour la destination Marseille",
            "stack": "HTML + CSS",
            "web": "",
            "alt": "Capture d'écran du site Booki"
        },
        {
            "id": "1",
            "src": restau,
            "title": "Oh my food",
            "brief": "Développement d'un site pour réservation en restaurant",
            "explanation": "Création d'un site pour réserver une table et commander des plats en avance à l'arrivée au restaurant.<br>",
            "stack": "HTML + CSS + Sass",
            "web": "",
            "alt": "Capture d'écran du site Oh my food"
        },
        {
            "id": "2",
            "src": skate,
            "title": "Print it!",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "",
            "alt": "Capture d'écran du site Print it!"
        },
        {
            "id": "3",
            "src": marseille,
            "title": "Sophie Bluel Architecte d'interieur",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "",
            "alt": "Capture d'écran du site Sophie Bluel"
        },
        {           
            "id": "4",
            "src": restau,
            "title": "Mémoirs des cendres",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + JavaScript",
            "web": "https://memoires-des-cendres.alwaysdata.net/",
            "alt": "Capture d'écran du site Mémoirs des cendres"
        },
        {
            "id": "5",
            "src": skate,
            "title": "Kasa",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React",
            "web": "https://kasa-phi-six.vercel.app/",
            "alt": "Capture d'écran du site Kasa"
        },
        {   
            "id": "6",
            "src": marseille,
            "title": "Nina Carducci",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS",
            "web": "",
            "alt": "Capture d'écran du site Nina Carducci"
        },
        {            
            "id": "7",
            "src": skate,
            "title": "724 events",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React",
            "web": "https://724events-iota.vercel.app/",
            "alt": "Capture d'écran du site 724 events"
        },
        {            
            "id": "8",
            "src": marseille,
            "title": "ArgentBank",
            "brief": "Lorem ipsum dolor sit",
            "explanation": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa, nam officiis perferendis temporibus obcaecati animi perspiciatis quis. Minima ex aperiam asperiores quae reprehenderit. Neque dignissimos quam error ducimus explicabo?",
            "stack": "HTML + CSS + React + Redux Toolkit",
            "web": "",
            "alt": "Capture d'écran du site ArgentBank"
        },
        {            
            "id": "9",
            "src": restau,
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