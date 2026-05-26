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
import equipe from "../../assets/images/icons/equipe.png"
import resultats from "../../assets/images/icons/resultats.png"
import perseverance from "../../assets/images/icons/perseverance.png"

function Competences() {

    const hardSkills= [
        {
            "id": 0,
            "src": html,
            "alt": "Icône HTML5",
            "title": "HTML5",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 1,
            "src": css,
            "alt": "Icône CSS3",
            "title": "CSS3",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 2,
            "src": sass,
            "alt": "Icône Sass",
            "title": "Sass",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 3,
            "src": js,
            "alt": "Icône JavaScript",
            "title": "JavaScript",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 4,
            "src": react,
            "alt": "Icône React",
            "title": "React",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
        },
        {
            "id": 5,
            "src": redux,
            "alt": "Icône Redux",
            "title": "Redux",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
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
            "src": equipe,
            "alt": "Icône Esprit d'équipe",
            "title": "Esprit d'équipe",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At minus fuga, veritatis numquam voluptatibus accusamus est unde a corrupti quas voluptas quasi iste accusantium eligendi eveniet? Modi velit harum perspiciatis?"
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