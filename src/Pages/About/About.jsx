import './About.css'
import portrait from "../../assets/images/photos/SujuBN_mobile.jpg"


function About() {
    return (
        <>
            <section id="about">
                <h3>À propos de moi</h3>
                <div className="allAbout">
                    <img src={portrait} alt="Susana de Ory"></img>
                    <p>
                        Je suis convaincue qu’un développeur doit maîtriser les technologies qu’il utilise. Les outils 
                        d’intelligence artificielle sont devenus de précieux alliés, mais ils ne remplacent ni la compréhension 
                        technique ni l’esprit critique. Plus un développeur comprend les technologies sous-jacentes, plus il est 
                        capable d’utiliser ces outils efficacement et d’en évaluer les résultats avec discernement.
                    </p>
                    <p>
                        C’est pourquoi les principes de l’artisanat logiciel me semblent essentiels : concevoir des logiciels de 
                        qualité, créer de la valeur et construire une relation de confiance avec les clients et les utilisateurs. 
                        Ces dimensions ne peuvent être pleinement assurées par une intelligence artificielle ; elles reposent 
                        avant tout sur la compréhension, l’échange et la collaboration humaine.
                    </p>
                    <p>
                        Cette dimension humaine est particulièrement importante dans la conception de l’expérience utilisateur : anticiper les comportements des utilisateurs et créer des interfaces qui leur parlent vraiment, 
                        pour que la technique et l'humain se rejoignent.
                    </p>
                </div>
            </section>
        </>
    )}
export default About