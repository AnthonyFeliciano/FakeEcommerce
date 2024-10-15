
import style from './Header.module.css'
import { IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import SelectCategories from './SelectCategories'
import SelectOrdenar from './SelectOrdenar'

function Header ({categories, order, typeListProducts, handleSelectChangeCategories, handleSelectChangeOrdenar, resultadoPesquisa}){
    
    const typeList = e => {
        let name = e.currentTarget.getAttribute('name')
        order(name)
    }
    
    return(
        <div className={style.headerContent }>
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
                    <FaList className={typeListProducts === 'productContainerList' ? style.activeIcon : ''} name="productContainerList" onClick={typeList}/>
                </div>
                <div className={style.iconCard}>
                    <IoGridOutline className={typeListProducts === 'productContainerBlock' ? style.activeIcon : ''} name="productContainerBlock" onClick={typeList}/>
                </div>
            </div>
        </div>

        
    )
}

export default Header