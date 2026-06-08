import Button from "./Button.jsx"
import Modal from "./Modal.jsx"
import ContentModal from "./ContentModal.jsx"
import { useState } from "react";

function CardS({projects, technologies}) {
    const [isSelected, setIsSelected] = useState(null);
    
    return(
        <>
            <section className="projectCards">
                {projects.map((p) =>
                <div className="smallCard" key={p.id}>
                    <img src={p.src} alt={p.alt}></img>
                    <div className="cardData">
                        <h4 className="cardSTitle">{p.title}</h4>
                        <p>{p.brief}</p>
                        <p><b>{technologies}</b> {p.stack}</p>
                    </div>
                    <Button aria={`Voir détails de ${p.title}`} className="buttonCard" onClick={() => setIsSelected(p)} type="button" value="modal-opener" title="Voir plus" text="Voir plus" />
                </div>)}
                {isSelected && (
                    <Modal 
                        opened={(isSelected !== null)} 
                        onClose={() => setIsSelected(null)}
                        content={isSelected && <ContentModal content={isSelected} technologies="Technologies :" classname="projectModal" cardTitle="cardSTitle" />}>
                    </Modal>
                )}
            </section>
        </>
    )
}

export default CardS