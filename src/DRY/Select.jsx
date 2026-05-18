function Select({stacks}) {
const stacksArray = ["Tous", ...stacks];
console.log(stacks);
    return (
        <>
            <label htmlFor="stack">Choisissez les technologies :</label>
            <select id="stack" name="stack" defaultValue="">
                {stacksArray.map((s) =>
                    <option value={s}>{s}</option>)} 
            </select>
        </>
    )
}

export default Select