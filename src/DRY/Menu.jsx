import Button from "./Button.jsx";

function Menu({menuOptions, className, closeMenu, ariaLabel}) {

return (
    <>
        <nav className={className} aria-label={ariaLabel}>
            <ul>          
            {menuOptions.map((s) =>
                <li key={s.id}>
                    <Button value={s.value} aria={`Section ${s.title}`}><a href={s.link} onClick={closeMenu} className="menuButton">{s.title}</a></Button>                    
                </li>
            )}
            </ul>            
        </nav>
    </>
)

}

export default Menu