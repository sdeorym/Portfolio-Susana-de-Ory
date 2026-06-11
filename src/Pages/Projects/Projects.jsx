import './Projects.css'
import Select from "../../DRY/Select.jsx"
import CardS from "../../DRY/CardS.jsx"
import booki from "../../assets/images/projects/booki.avif"
import ohmy from "../../assets/images/projects/ohmyfood.avif"
import print from "../../assets/images/projects/print.avif"
import bluel from "../../assets/images/projects/bluel.avif"
import memoires from "../../assets/images/projects/memoirs.avif"
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
            "explanation":  <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Intégration d'un site statique pour une agence de voyages : présentation d'hôtels et d'activités, mise en page responsive.</p>
                            </section>,
            "stack": "HTML + CSS",
            "web": "https://sdeorym.github.io/booki/",
            "alt": "Capture d'écran du site Booki"
        },
        {
            "id": "1",
            "src": ohmy,
            "title": "Oh my food",
            "brief": "Développement d'un site pour réservation en restaurant",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Intégration d'un site responsive pour une application de restauration, avec animations et transitions réalisées en Sass.</p>
                            </section>,
            "stack": "HTML + CSS + Sass",
            "web": "https://sdeorym.github.io/OhMyFood/index.html",
            "alt": "Capture d'écran du site Oh my food"
        },
        {
            "id": "2",
            "src": print,
            "title": "Print it!",
            "brief": "Carrousel interactif",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Développement d'un carrousel interactif en hero pour un site d'imprimerie : navigation par flèches, réalisée en JavaScript. Le reste du site était déjà fourni.</p>
                            </section>,
            "stack": "HTML + CSS + JavaScript",
            "web": "https://sdeorym.github.io/printIt/",
            "alt": "Capture d'écran du site Print it!"
        },
        {
            "id": "3",
            "src": bluel,
            "title": "Sophie Bluel Architecte d'interieur",
            "brief": "Portfolio interactif",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Portfolio interactif avec filtrage des projets par catégorie et espace utilisateur permettant d'ajouter et de supprimer des projets dynamiquement.</p>
                            </section>,
            "stack": "HTML + CSS + JavaScript",
            "web": "https://portfolio-sophie-bluel-lyart.vercel.app/",
            "alt": "Capture d'écran du site Sophie Bluel"
        },
        {           
            "id": "4",
            "src": memoires,
            "title": "Mémoires des cendres",
            "brief": "BD interactive",
            "explanation": <section>
                                <h5>Contexte</h5><p>Collaboration avec des étudiants de l'École des Gobelins dans le cadre de leur projet de narration interactive.</p>
                                <h5>Description</h5><p>Développement de la version web d'une BD interactive : page de couverture, introduction, et navigation non linéaire permettant à l'utilisateur de choisir son point d'entrée dans l'histoire et de suivre le récit du personnage de son choix parmi trois protagonistes.</p>
                            </section>,
            "stack": "HTML + CSS + JavaScript",
            "web": "https://memoires-des-cendres.alwaysdata.net/",
            "alt": "Capture d'écran du site Mémoirs des cendres"
        },
        {
            "id": "5",
            "src": kasa,
            "title": "Kasa",
            "brief": "Application de location immobilière",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Intégration d'une application de location immobilière en React : présentation des logements avec navigation entre annonces via React Router et composants réutilisables.</p>
                            </section>,
            "stack": "HTML + CSS + React + React Router",
            "web": "https://kasa-phi-six.vercel.app/",
            "alt": "Capture d'écran du site Kasa"
        },
        {   
            "id": "6",
            "src": nina,
            "title": "Nina Carducci",
            "brief": "Optimisation d'un site web",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Optimisation d'un site de photographe existant : amélioration du SEO, de l'accessibilité et des performances pour augmenter la visibilité et attirer de nouveaux clients.</p>
                            </section>,
            "stack": "HTML + CSS",
            "web": "https://sdeorym.github.io/ninacarducci/",
            "alt": "Capture d'écran du site Nina Carducci"
        },
        {            
            "id": "7",
            "src": eventsweb,
            "title": "724 events",
            "brief": "Débogage d'un site web",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Débogage d'un site React pour une agence d'événementiel : identification et correction de bugs, et mise en place de tests unitaires et d'intégration avec Jest.</p>
                            </section>,
            "stack": "HTML + CSS + React",
            "web": "https://724events-iota.vercel.app/",
            "alt": "Capture d'écran du site 724 events"
        },
        {            
            "id": "8",
            "src": argent,
            "title": "ArgentBank",
            "brief": "application bancaire",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description</h5><p>Développement de l'interface utilisateur d'une application bancaire en React : authentification, gestion du profil et modification du nom d'utilisateur avec Redux. Documentation des futures API bancaires (consultation des comptes, transactions, commentaires) via Swagger.</p>
                            </section>,
            "stack": "HTML + CSS + React + Redux Toolkit",
            "web": "https://argent-bank-frontend-omega.vercel.app/",
            "alt": "Capture d'écran du site ArgentBank"
        },
        {            
            "id": "9",
            "src": lpg,
            "title": "LPG Consulting",
            "brief": "Site vitrine",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet professionnel.</p>
                                <h5>Description</h5><p>Développement d'un site vitrine pour un consultant indépendant : présentation du parcours, des services et formulaire de contact.</p>
                            </section>,
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