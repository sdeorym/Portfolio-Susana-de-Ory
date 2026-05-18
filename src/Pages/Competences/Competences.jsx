import './Competences.css'
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
            "id": "0",
            "src": html,
            "alt": "Icône HTML5",
            "title": "HTML5"
        },
        {
            "id": "1",
            "src": css,
            "alt": "Icône CSS3",
            "title": "CSS3"
        },
        {
            "id": "2",
            "src": sass,
            "alt": "Icône Sass",
            "title": "Sass"
        },
        {
            "id": "3",
            "src": js,
            "alt": "Icône JavaScript",
            "title": "JavaScript"
        },
        {
            "id": "4",
            "src": react,
            "alt": "Icône React",
            "title": "React"
        },
        {
            "id": "5",
            "src": redux,
            "alt": "Icône Redux",
            "title": "Redux"
        },
    ]
    const softSkills= [
        {
            "id": "0",
            "src": analytique,
            "alt": "Icône Analytiqye",
            "title": "Analytique"
        },
        {
            "id": "1",
            "src": creativite,
            "alt": "Icône créativité",
            "title": "Créativité"
        },
        {
            "id": "2",
            "src": detail,
            "alt": "Icône Attention au détail",
            "title": "Attention au détail"
        },
        {
            "id": "3",
            "src": equipe,
            "alt": "Icône Esprit d'équipe",
            "title": "Esprit d'équipe"
        },
        {
            "id": "4",
            "src": resultats,
            "alt": "Icône Orientée vers les résultats",
            "title": "Orientée vers les résultats"
        },
        {
            "id": "5",
            "src": perseverance,
            "alt": "Icône Persévérance",
            "title": "Persévérance"
        },
    ]

    return (
        <section id="competences">
            <h3>Mes compétences</h3>
            <section className="skillbox tech">
                <h4>Compétences techniques</h4>
                {hardSkills.map((h) =>
                    <div className="skill-list" key={h.id}>
                        <div className="iconList"><div><img src={h.src} alt={h.alt}></img></div><small>{h.title}</small></div>
                    </div>        
                )}                
            </section>
            <section className="skillbox softie">
                <h4>Soft skills</h4>
                {softSkills.map((s) =>
                    <div className="skill-list" key={s.id}>
                        <div className="iconList"><div><img src={s.src} alt={s.alt}></img></div><small>{s.title}</small></div>
                    </div>
                )} 
            </section>
        </section>
    )
}

export default Competences