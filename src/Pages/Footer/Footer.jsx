import './Footer.css'
import Menu from "../../DRY/Menu.jsx";
import linkedin from "../../assets/images/icons/linkedin.png"
import github from "../../assets/images/icons/github.png"

function Footer() {

const menuCards = [
    {
        "id" : "0",
        "title": "Accueil",
        "link" : "Hero"
    }, 
    {
        "id" : "1",
        "title": "Projets",
        "link" : "Projects"
    }, 
    {
        "id" : "2",
        "title": "Compétences",
        "link" : "Competences"
    },
    {
        "id" : "3",
        "title": "Contact",
        "link" : "Contact"
    }
]

return (
    <>
        <Menu menuOptions = {menuCards} />
        <div className="closure">
            © 2026 Susana de Ory<br />
            <small>Icônes par icons8. Image hero par Daniil Komov.</small>
            <div className="links">
                <a href="https://www.linkedin.com/in/sdeorym/?locale=fr-FR"><img src={linkedin} alt="Icône Linkedin"></img></a>
                <a href="https://github.com/sdeorym"><img src={github} alt="Icône Github"></img></a>
            </div>
        </div>
    </>
)

}

export default Footer