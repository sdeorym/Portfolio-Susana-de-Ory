import { useState } from "react";

function Select({stacks, onChange}) {
    const [stacked, setStacked] = useState("");
    const stacksArray = ["Tous", ...stacks];

    const changeValue = (newValue) => {
        onChange(newValue);
        setStacked(newValue);
    };

    return (
        <div className="selector">
            <label htmlFor="stack">Choisissez les technologies :</label>
            <select id="stack" name="stack" value={stacked} onChange={e => changeValue(e.target.value)}>
                {stacksArray.map((s, index) =>
                    <option key={index} value={s}>{s}</option>)}
            </select>
        </div>
    )
}

export default Select