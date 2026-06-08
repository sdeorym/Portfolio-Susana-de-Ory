import Button from "./Button.jsx"
import Modal from "./Modal.jsx"
import ContentModal from "./ContentModal.jsx"
import { useState } from "react";


function Skills({title, array})  {
    const [isSelected, setIsSelected] = useState(null);
    return(
        <> 
            <h4>{title}</h4>
            <div className="iconList">
                {array.map((item) =>                
                    <div className="iconId" key={item.id}>
                        <Button aria={`Détails de ${item.title}`} onClick={() => setIsSelected(item)}>
                            <img src={item.src} alt={item.alt}></img>
                        </Button>                        
                        <small>{item.title}</small>                        
                    </div>                    
                )}
                {isSelected && (
                    <Modal 
                        opened={(isSelected !== null)} 
                        onClose={() => setIsSelected(null)}
                        content={isSelected && <ContentModal content={isSelected} classname="skillModal" />}>
                    </Modal>
                )}
            </div>
        </>
    )
}
export default Skills