
function ContentModal({content, classname, technologies}) {


return (
    <>
        <div className={classname}>
            <h4>{content.title}</h4>
            <img src={content.src} alt={content.alt}></img>
            <p>{content.text}</p>
            <p>{content.explanation}</p>
            <p><br/><b>{technologies}</b> {content.stack}</p>
        </div>
    </>
)

}

export default ContentModal