
function ContentModal({content, classname, technologies, cardTitle}) {


return (
    <>
        <div className={classname}>
            <h4 className={cardTitle}><a href={content.web}>{content.title}</a></h4>
            <img src={content.src} alt={content.alt}></img>
            <p>{content.text}</p>
            <p>{content.explanation}</p>
            <p><br/><b>{technologies}</b> {content.stack}</p>
        </div>
    </>
)

}

export default ContentModal