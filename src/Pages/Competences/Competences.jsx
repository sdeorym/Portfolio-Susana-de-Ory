import './Competences.css'
import Skills from "../../DRY/Skills.jsx"
import html from "../../assets/images/icons/html.png"
import css from "../../assets/images/icons/css.png"
import sass from "../../assets/images/icons/sass.png"
import js from "../../assets/images/icons/js.png"
import react from "../../assets/images/icons/react.png"
import redux from "../../assets/images/icons/redux.png"
import analytique from "../../assets/images/icons/analitique.png"
import creativite from "../../assets/images/icons/creativite.png"
import detail from "../../assets/images/icons/detail.png"
import colab from "../../assets/images/icons/equipe.png"
import resultats from "../../assets/images/icons/resultats.png"
import perseverance from "../../assets/images/icons/perseverance.png"
import adaptable from "../../assets/images/icons/adaptable.png"
import communication from "../../assets/images/icons/communication.png"
import autonome from "../../assets/images/icons/autonome.png"

function Competences() {

    const hardSkills= [
        {
            "id": 0,
            "src": html,
            "alt": "Icône HTML5",
            "title": "HTML5",
            "text": <ul><li>Booki</li><li>Oh my food</li><li>Print it!</li><li>Sophie Bluel Architecte d'interieur</li><li>Mémoirs des cendres</li><li>Kasa</li><li>Nina Carducci</li><li>724 events</li><li>ArgentBank</li><li>LPG Consulting</li></ul>
        },
        {
            "id": 1,
            "src": css,
            "alt": "Icône CSS3",
            "title": "CSS3",
            "text": <ul><li>Booki</li><li>Oh my food</li><li>Print it!</li><li>Sophie Bluel Architecte d'interieur</li><li>Mémoirs des cendres</li><li>Kasa</li><li>Nina Carducci</li><li>724 events</li><li>ArgentBank</li><li>LPG Consulting</li></ul>
        },
        {
            "id": 2,
            "src": sass,
            "alt": "Icône Sass",
            "title": "Sass",
            "text": <ul><li>Oh my food</li></ul>
        },
        {
            "id": 3,
            "src": js,
            "alt": "Icône JavaScript",
            "title": "JavaScript",
            "text": <ul><li>Print it!</li><li>Sophie Bluel Architecte d'interieur</li><li>Mémoirs des cendres</li></ul>
        },
        {
            "id": 4,
            "src": react,
            "alt": "Icône React",
            "title": "React",
            "text": <ul><li>Kasa</li><li>724 events</li><li>LPG Consulting</li></ul>
        },
        {
            "id": 5,
            "src": redux,
            "alt": "Icône Redux",
            "title": "Redux",
            "text": <ul><li>ArgentBank</li></ul>
        }
    ]
    const softSkills= [
        {
            "id": 0,
            "src": analytique,
            "alt": "Icône Analytiqye",
            "title": "Analytique",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 1,
            "src": creativite,
            "alt": "Icône créativité",
            "title": "Créativité",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 2,
            "src": detail,
            "alt": "Icône Attention au détail",
            "title": "Attention au détail",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 3,
            "src": colab,
            "alt": "Icône Collaboration interdisciplinaire",
            "title": "Collaboration interdisciplinaire",
            "text": "Collaboration avec des animateurs de la Grand École des Gobelins pour la création d'une bande dessinée intéractive (Mémoirs des cendres)."
        },
        {
            "id": 4,
            "src": resultats,
            "alt": "Icône Orientée vers les résultats",
            "title": "Orientée vers les résultats",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 5,
            "src": perseverance,
            "alt": "Icône Persévérance",
            "title": "Persévérance",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 6,
            "src": adaptable,
            "alt": "Icône adaptabilité",
            "title": "Adaptabilité",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 7,
            "src": communication,
            "alt": "Icône Communication",
            "title": "Communication",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 8,
            "src": autonome,
            "alt": "Icône Autonomie",
            "title": "Autonomie",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        }/**/
    ]
    const skillsBox=[
        {
            "id": 0,
            "title": "Compétences techniques",
            "className": "tech",
            "array": hardSkills
        },
        {
            "id": 1,
            "title": "Soft skills",
            "className": "softie",
            "array": softSkills
        }
    ]

    return (
        <section id="competences">
            <h3>Mes compétences</h3>
            {skillsBox.map((s) =>
                <section className={`skillbox ${s.className}`} key={s.id}>                                    
                    <Skills title={s.title} array={s.array} />                                
                </section>
            )}
        </section>
    )
}

export default Competences