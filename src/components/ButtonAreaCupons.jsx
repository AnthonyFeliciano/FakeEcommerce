import style from './ButtonAreaCupons.module.css'

function ButtonAreaCupons({text}){
    return(
        <button className={style.buttonsAreaCupons}>{text}</button>
    )
}

export default ButtonAreaCupons