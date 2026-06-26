
function ContentModal({content, classname, technologies, cardTitle}) {


return (
    <>
        <div className={classname}>
            <h4 className={cardTitle}><a href={content.web}>{content.title}</a></h4>
            <img src={content.src} alt={content.alt}></img>
            <p>{content.text}</p>
            <p>{content.explanation}</p>
            <h5>{technologies}</h5><p>{content.stack}</p>
        </div>
    </>
)

}

export default ContentModal