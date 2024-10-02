import style from './Select.module.css'

function Select({name, text, handleSelectChangeCategories, categories = []}){
    const handleChange = e => {
        
        let value = e.target.options[e.target.selectedIndex].text 
        let index = e.target.selectedIndex
        handleSelectChangeCategories(value, index)
    }

    return(
        <div>
            <label htmlFor={name}>{text}: </label>
            <select name={name} onChange={handleChange}>
                <option value="">Todos</option>
                
                 {categories.map((category, index)=> (
                    <option key={index} value={index}> {category}</option>
                ))}  
            </select>
        </div>
    )
}

export default Select