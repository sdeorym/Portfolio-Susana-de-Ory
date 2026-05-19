function Select({stacks}) {
const stacksArray = ["Tous", ...stacks];
console.log(stacks);
    return (
        <div className="selector">
            <label htmlFor="stack">Choisissez les technologies :</label>
            <select id="stack" name="stack" defaultValue="">
                {stacksArray.map((s) =>
                    <option value={s}>{s}</option>)} 
            </select>
        </div>
    )
}

export default Select