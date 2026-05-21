import Button from "./Button.jsx"

function Skills({title, array})  {
    return(
        <> 
            <h4>{title}</h4>
            <div className="iconList">
                {array.map((item) =>
                    <div className="iconId" key={item.id}>
                        <Button>{<img src={item.src} alt={item.alt}></img>}</Button>                        
                        <small>{item.title}</small>
                    </div>)}
            </div>
        </>
    )
}
export default Skills