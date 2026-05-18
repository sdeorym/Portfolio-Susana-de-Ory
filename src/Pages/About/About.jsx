import './About.css'
import portrait from "../../assets/images/photos/SujuBN_mobile.jpg"


function About() {
    return (
        <>
            <section id="about">
                <h3>À propos de moi</h3>
                <div className="allAbout">
                    <img src={portrait} alt="Susana de Ory"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum assumenda praesentium et delectus maxime dolorum tempora similique suscipit alias velit minus in maiores odio neque veritatis, quo molestias unde.</p>
                </div>
            </section>
        </>
    )}
export default About