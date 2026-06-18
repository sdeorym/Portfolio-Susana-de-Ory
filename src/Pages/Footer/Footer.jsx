import './Footer.css'
import Button from "../../DRY/Button.jsx";
import Menu from "../../DRY/Menu.jsx";
import linkedin from "../../assets/images/icons/linkedin.png"
import github from "../../assets/images/icons/github.png"

function Footer() {

const menuCards = [
    {
        "id" : 0,
        "title": "Accueil",
        "link" : "#hero"
    }, 
    {
        "id" : 1,
        "title": "Projets",
        "link" : "#projects"
    }, 
    {
        "id" : 2,
        "title": "Compétences",
        "link" : "#competences"
    },
    {
        "id" : 3,
        "title": "Contact",
        "link" : "#contact"
    }
]

return (
    <>
        <div className="closing">
            <Menu menuOptions = {menuCards} className="footerMenu" ariaLabel="Liens du pied de page" />
            <div className="links">
                <Button aria="Ouvrir profile Linkedin"><a href="https://www.linkedin.com/in/sdeorym/?locale=fr-FR"><img src={linkedin} alt="Icône Linkedin"></img></a></Button>
                <Button aria="Ouvrir profile Github"><a href="https://github.com/sdeorym"><img src={github} alt="Icône Github"></img></a></Button>
            </div>            
            © 2026 Susana de Ory<br />
            <small>Icônes par icons8. Image hero par Daniil Komov.</small>
        </div>
    </>
)

}

export default Footer