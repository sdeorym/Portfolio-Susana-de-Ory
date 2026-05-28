import Button from "./Button.jsx"

function CardS({projects, technologies}) {

    return(
        <>
            <section className="projectCards">
                {projects.map((p) =>
                <div className="smallCard" key={p.id}>
                    <img src={p.image} alt={p.alt}></img>
                    <div className="cardData">
                        <h4>{p.title}</h4>
                        <p>{p.brief}</p>
                        <p><b>{technologies}</b> {p.stack}</p>
                    </div>
                    <Button className="buttonCard" type="button" value="modal-opener" title="Voir plus" text="Voir plus" />
                </div>)}
            </section>
        </>
    )
}

export default CardS