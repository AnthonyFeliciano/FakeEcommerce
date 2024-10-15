import style from './Footer.module.css'
function Footer() {
    return(
        <div className={style.footer}>
            <p>
                Todos os direitos reservados © {new Date().getFullYear()}.
            </p>
        </div>
    )
}
export default Footer