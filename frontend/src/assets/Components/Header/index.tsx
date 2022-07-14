import logo from '../../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (

        <header>
            {/* No react não se informa "class" e sim "ClassName" */}
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/bor18.henrique/" target={'_blank'}> @bor18.henrique</a>
                </p>
            </div>
        </header>

    )
}

export default Header