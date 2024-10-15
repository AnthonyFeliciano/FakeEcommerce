import style from './ResultSearch.module.css'

function ResultSearch({inputBuscarItem}){
    return(
        <div className={style.resultadoPesquisa}>
            <p>Você pesquisou por: <span>{inputBuscarItem}</span></p>
        </div>
    )
}

export default ResultSearch