import './Contact.css'
import Button from "../../DRY/Button.jsx"
import { useState } from "react";


function Contact() {
    const [formData, setFormData] = useState({username: '', email: '', message: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value});
        console.log(formData, { ...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {username: formData.username, email: formData.email, message: formData.message};
        const stringifiedJsonData = JSON.stringify(dataToSend);
        try {
            const response = await fetch("/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: stringifiedJsonData
            });
            
            if (!response.ok) {
                const text = await response.text(); 
                throw new Error("L'envoi du message a échoué. Veuilllez essayer plus tard.");
            }
            const result = await response.json();
            console.log(result);
            alert("L'envoi du message a réussi.");
            setFormData({username: '', email: '', message: ''});
            e.target.reset();
            // handleModal();         
        }
        catch(error) {
            alert("L'envoi du message a échoué. Veuilllez essayer plus tard.");
            // handleModal();
            }
    }
    
  return (
    <section className="contactform" id="contact">
        <h3>Contact</h3>
        <form  onSubmit={handleSubmit}>
            <div className="textbox">
                <label>Nom</label>
                <input placeholder="Votre nom ici" type="text" id="username" name="username" onBlur={handleChange} required />
            </div>
            <div className="textbox">
                <label >Courriel</label>
                <input placeholder="info@example.com" type="email" id="email" name="email" onBlur={handleChange} required />
            </div>
            <div className="textbox">
                <label >Message</label>
                <textarea className="messagebox" type="message" name="message" rows="10" placeholder="Votre message ici" onBlur={handleChange} required />
            </div>
            <Button 
                type="submit" 
                value="Send" 
                title="Envoyer" 
                text="Envoyer"
                className = {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"} 
                disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
                data={formData}
                aria="Bouton envoyer message"     
            />
        </form>
      
    </section>
  )
}

export default Contact