import Button from "./Button.jsx";

function Menu({menuOptions}) {

return (
    <>
        <nav>
            <ul>
                {menuOptions.map((s) =>
                <ul key={s.id}>
                    <li>
                        title = {s.title}
                        link = {s.link}
                    </li>
                </ul>
            )}
            </ul>
        </nav>
    </>
)

}

export default Menu