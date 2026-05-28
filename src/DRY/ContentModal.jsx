
function ContentModal({content, classname}) {

    console.log("OLA KE ASE, ABRE LA MODAL O KE ASE");

return (
    <>
        <div className={classname}>
            <h5>{content.title}</h5>
            <img src={content.src} alt={content.alt}></img>
            <p>{content.text}</p>
        </div>
    </>
)

}

export default ContentModal