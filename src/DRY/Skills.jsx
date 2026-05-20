function Skills({title, array})  {
    return(
        <> 
            <h4>{title}</h4>
            <div className="iconList">
                {array.map((item) =>
                    <div className="iconId" key={item.id}>
                        <img src={item.src} alt={item.alt}></img>
                        <small>{item.title}</small>
                    </div>)}
            </div>
        </>
    )
}
export default Skills