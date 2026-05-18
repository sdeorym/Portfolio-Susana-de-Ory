import Button from "./Button.jsx"

function CardS({projects}) {

    return(
        <>
            <section className="projectCards">
                {projects.map((p) =>
                <div className="smallCard" key={p.id}>
                    <img src={p.image} alt={p.alt}></img>
                    <h4>{p.title}</h4>
                    <p>{p.brief}</p>
                    <p><b>Technologies:</b> {p.stack}</p>
                    <Button className="buttonCard" type="button" value="modal-opener" title="Voir plus" text="Voir plus" />
                </div>)}
            </section>
        </>
    )
}

export default CardS