import Button from "./Button.jsx";

function Menu({menuOptions, className}) {

return (
    <>
        <nav className={className}>
            <ul>          
            {menuOptions.map((s) =>
                <li key={s.id}>
                    <Button value={s.value} ><a href={s.link}>{s.title}</a></Button>                    
                </li>
            )}
            </ul>            
        </nav>
    </>
)

}

export default Menu