import Button from "./Button.jsx";

function Menu({menuOptions, className}) {

return (
    <>
        <nav>            
            {menuOptions.map((s) =>
            <ul key={s.id} className={className}>
                <li>
                    <a href={s.link}>{s.title}</a>
                    
                </li>
            </ul>
        )}            
        </nav>
    </>
)

}

export default Menu