import ContentModal from "./ContentModal.jsx"
import Button from "./Button.jsx"
import closure from "../assets/images/icons/close.png"

function Modal({opened, content, onClose}) {

return (
    <>        
        {opened && (
            <div className="overlay" onClick={onClose}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="info">
                        <Button buttonType="button" onClick={onClose} className="closure">
                            <img src={closure} alt="Fermer la fenêtre"></img>
                        </Button>
                        {content}
                    </div>
                </div>
            </div>
        )}
    </>
)

}

export default Modal