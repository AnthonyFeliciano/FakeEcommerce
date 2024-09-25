
import style from './Header.module.css'
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import SelectCategories from './SelectCategories'
import SelectOrdenar from './SelectOrdenar'

function Header ({categories, handleSelectChangeCategories,handleSelectChangeOrdenar}){
    return(
        <div className={style.headerContent}>
            
            <div className={style.selects}>
                <SelectCategories 
                    name="categoria" 
                    handleSelectChangeCategories={handleSelectChangeCategories} 
                    text="Categoria" 
                    categories={categories}
                />

                <SelectOrdenar 
                name="ordenar" 
                handleSelectChangeOrdenar={handleSelectChangeOrdenar}
                text="Ordenar"/> 
            </div>
            <div className={style.IconsGridProduct}>

                <div className={style.iconList}>
                    <FaList/>
                </div>
                <div className={style.iconCard}>
                    <IoGridOutline/>
                </div>


            </div>
        </div>

        
    )
}

export default Header