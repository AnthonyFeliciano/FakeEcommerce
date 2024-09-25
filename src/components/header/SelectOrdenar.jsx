import style from './Select.module.css'

function Select({name, text, handleSelectChangeOrdenar, }){
    const handleChange = e => {
        let value = e.target.options[e.target.selectedIndex].value // Seleciona a option do select
        handleSelectChangeOrdenar(value)
    }

    return(
        <div>
            <label htmlFor={name}>{text}: </label>
            <select name={name} onChange={handleChange}>
                <option value="asc">De A a Z </option>
                <option value="desc">De Z a A </option>
    
            </select>
        </div>
    )
}

export default Select