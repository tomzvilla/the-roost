import '../styles/footer.css'
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className="footer-content">
            <p>{t('footer.title')}</p>
            <p>{t('footer.name')}</p>
            <p> {t('footer.phoneNumber')} </p>
            <p> {t('footer.copyrights')} </p>

        </div>
    )
}

export default Footer