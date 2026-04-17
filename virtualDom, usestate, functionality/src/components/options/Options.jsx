import "./index.css"

export function Options({ options }) {

    return <>
        <select className="selectBox" name="option-selector">
            {options.map((e) => (
                <option className="options" key={e.id} value={e.value}>{e.label}</option>
            ))
            }
        </select>

    </>
}
