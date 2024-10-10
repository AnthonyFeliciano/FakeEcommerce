import style from './InputCart.module.css'
import ButtonAreaCupons from './ButtonAreaCupons'

function InputCart({textBtn, placeholder, name}){

    return(
        <div className={style.inputCart}>
            <input type="text" placeholder={placeholder} name={name}/>
            <ButtonAreaCupons text={textBtn}/>
        </div>
    )
}

export default InputCart