import style from './Footer.module.css'


function Footer() {

    return(
<div className={style.footer}>
    <p>
        Deselvolvido com 🩵 por Anthony Feliciano.
    </p>
    <p>
        Todos os direitos reservados © {new Date().getFullYear()}.
    </p>
</div>

    )

}

export default Footer