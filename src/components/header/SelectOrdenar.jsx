import style from './Select.module.css'

function Select({name, text, handleSelectChangeOrdenar, }){
    const handleChange = e => {
        let value = e.target.options[e.target.selectedIndex].value 
        handleSelectChangeOrdenar(value)
    }

    return(
        <div>
            <label htmlFor={name}>{text}: </label>
            <select name={name} onChange={handleChange}>
                <option value="asc">Nome Crescente</option>
                <option value="desc">Nome Decrescente</option>
    
            </select>
        </div>
    )
}

export default Select