import Button from "./Button.jsx";

function Menu({menuOptions, className}) {

return (
    <>
        <nav className={className}>            
            {menuOptions.map((s) =>
            <ul key={s.id} className={className}>
                <li>
                    <Button><a href={s.link}>{s.title}</a></Button>                    
                </li>
            </ul>
        )}            
        </nav>
    </>
)

}

export default Menu