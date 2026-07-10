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
import charlotte from "../../assets/images/projects/charlotte.avif"
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
                                <h5>Contexte :</h5><p>Projet de formation OpenClassrooms.</p>
                                <h5>Description :</h5><p>Intégration d'un site statique pour une agence de voyages : présentation d'hôtels et d'activités, mise en page responsive.</p>
                                <h5>Objectifs :</h5><p>Intégrer une maquette en HTML/CSS responsive fidèle au design fourni.</p>
                                <h5>Compétences développées :</h5><p>Structure sémantique HTML, mise en page CSS, responsive design.</p>
                                <h5>Résultats :</h5><p>Site statique livré dans le cadre de la formation.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Intégration d'une API de destinations, remplacement du champ texte par un select dynamique alimenté par l'API, et activation des filtres de recherche.</p>
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
                                <h5>Objectifs :</h5><p>Intégrer une maquette responsive et développer des animations CSS avec Sass.</p>
                                <h5>Compétences développées :</h5><p>Responsive design, animations et transitions en Sass, structuration du code avec variables et mixins.</p>
                                <h5>Résultats :</h5><p>Site livré avec animations fluides sur les menus et les éléments interactifs.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Ajouter JavaScript pour rendre les commandes fonctionnelles et connecter une API de restaurants.</p>
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
                                <h5>Objectifs :</h5><p>Développer un carrousel interactif en JavaScript à partir d'un site existant.</p>
                                <h5>Compétences développées :</h5><p>Manipulation du DOM, gestion des événements JavaScript.</p>
                                <h5>Résultats :</h5><p>Carrousel fonctionnel livré et intégré au site.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Ajouter une transition automatique entre les slides et des animations d'entrée et de sortie.</p>
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
                                <h5>Objectifs :</h5><p>Développer un portfolio interactif avec filtrage par catégorie et espace d'administration pour gérer les projets.</p>
                                <h5>Compétences développées :</h5><p>Manipulation du DOM, gestion des événements, opérations CRUD, authentification par token, gestion de session administrateur.</p>
                                <h5>Résultats :</h5><p>Application livrée avec filtrage fonctionnel et interface d'administration complète.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Refactorisation du code et ajout d'une fonctionnalité de modification des projets existants.</p>

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
                                <h5>Objectifs :</h5><p>Développer la version web interactive d'une BD : navigation non linéaire et choix du personnage.</p>
                                <h5>Compétences développées :</h5><p>Manipulation du DOM avec gestion de fichiers image et audio, activation conditionnelle des boutons selon la progression du lecteur.</p>
                                <h5>Résultats :</h5><p>Projet publié et très bien reçu à l'École des Gobelins.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Affiner la synchronisation entre les images et le son pour une expérience de lecture plus immersive.</p>
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
                                <h5>Objectifs :</h5><p>Développer une application de location immobilière en React avec navigation entre les annonces.</p>
                                <h5>Compétences développées :</h5><p>Composants React réutilisables, React Router, gestion des props et du state.</p>
                                <h5>Résultats :</h5><p>Application livrée avec navigation fonctionnelle entre les logements.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Connecter une API immobilière réelle et ajouter un système de recherche et de filtrage des annonces.</p>
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
                                <h5>Objectifs :</h5><p>Optimiser un site existant en termes de SEO, d'accessibilité et de performances.</p>
                                <h5>Compétences développées :</h5><p>Audit et optimisation SEO, amélioration de l'accessibilité (WCAG), optimisation des performances (temps de chargement, compression des images).</p>
                                <h5>Résultats :</h5><p>Site optimisé avec amélioration mesurable des scores Lighthouse.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Activer le formulaire de contact avec un backend pour l'envoi des emails.</p>
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
                                <h5>Objectifs :</h5><p>Déboguer une application React existante et mettre en place des tests pour garantir la fiabilité du code.</p>
                                <h5>Compétences développées :</h5><p>Débogage React, tests unitaires et d'intégration avec Jest, lecture et compréhension de code existant.</p>
                                <h5>Résultats :</h5><p>Application livrée sans bugs identifiés et avec une couverture de tests.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Refactorisation de certains composants pour améliorer la lisibilité et la maintenabilité du code.</p>
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
                                <h5>Objectifs :</h5><p>Développer l'interface utilisateur d'une application bancaire avec authentification et gestion du profil utilisateur, et documenter les futures API avec Swagger.</p>
                                <h5>Compétences développées :</h5><p>React, Redux pour la gestion du state global, authentification par token, documentation API avec Swagger.</p>
                                <h5>Résultats :</h5><p>Application livrée avec connexion fonctionnelle, gestion du profil et documentation Swagger des endpoints bancaires.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Implémenter la gestion des comptes et des transactions bancaires, dont les endpoints ont été documentés avec Swagger.</p>
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
                                <h5>Objectifs :</h5><p>Développer un site vitrine en React : présentation des services, modales pour les projets et les recommandations, design réalisé en collaboration avec le client.</p>
                                <h5>Compétences développées :</h5><p>React, conception UX en collaboration avec le client, internationalisation avec une librairie i18n, design de A à Z.</p>
                                <h5>Résultats :</h5><p>Site publié et en production, disponible en français et en anglais.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Étendre l'internationalisation à d'autres langues selon les besoins du client.</p>
                            </section>,
            "stack": "HTML + CSS + React",
            "web":"https://lpgconsulting.fr/",
            "alt": "Capture d'écran du site LPG Consulting"
        },
        {            
            "id": "10",
            "src": charlotte,
            "title": "Cumplimiento normativo",
            "brief": "Application de régulation des travaux",
            "explanation": <section>
                                <h5>Contexte</h5><p>Projet professionnel.</p>
                                <h5>Description</h5><p>Développement d'une application pour vérifier si un travaux est fait selon les lois de bâtiment.</p>
                                <h5>Objectifs :</h5><p>Développer un site en React : présentation des services, formulaire de contact, formulaire de connexion (encore à développer).</p>
                                <h5>Compétences développées :</h5><p>React-Router, conception UX en collaboration avec le client, préparation du site pour y implémenter nouvelles fonctionnalités.</p>
                                <h5>Résultats :</h5><p>Site modélé à l'attente des améliorations techniques.</p>
                                <h5>Perspectives d'amélioration :</h5><p>Formulaires de contact et connexion actives, page client où envoyer la documentation pertinent en chaque cas.</p>
                            </section>,
            "stack": "HTML + CSS + React + React Router",
            "web":"https://charlotte-gules.vercel.app/",
            "alt": "Capture d'écran du site Cumplimiento normativo"
        }
    ]

    const changeStack = (value) => {
        setTechno(value);
    };
    const filteredProjects = ((techno != "Tous" && techno != "") ? (projects.filter(project => project.stack === techno)) : projects)

    const stacks = new Set(projects.map((project) => project.stack))
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