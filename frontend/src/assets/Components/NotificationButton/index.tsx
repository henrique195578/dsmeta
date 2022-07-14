/* Criadon expressao "icone" somente para pegar a imagem */
import icon from '../../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            {/* informado entre as chaves a expressao "icon" */}
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
