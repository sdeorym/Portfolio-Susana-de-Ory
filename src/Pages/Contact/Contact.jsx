import './Contact.css'
import Button from "../../DRY/Button.jsx"

function Contact() {
    /*
        htmlFor="username" type="text" id="username" name="username" onBlur={handleChange}
        htmlFor="email"  type="email" id="email" name="email" onBlur={handleChange} 
        htmlFor="message" type="text"name="message" rows="15" onBlur={handleChange} 
    */
  return (
    <section className="contactform">
        <h3 className="contactitle">Contact</h3>
        <form>
            <div className="textbox">
                <label>Nom</label>
                <input placeholder="Votre nom ici" required />
            </div>
            <div className="textbox">
                <label >Courriel</label>
                <input placeholder="info@example.com" required />
            </div>
            <div className="textbox">
                <label >Message</label>
                <textarea className="messagebox" placeholder="Votre message ici" required />
            </div>
            <Button className="sendMail" type="button" value="send-contact" title="Send message" text="Envoyer" />
        </form>
      
    </section>
  )
}

export default Contact