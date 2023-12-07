import ContactForm from "../components/ContactForm"
import Metadata from "../components/Metadata"
import Title from "../components/Title"
import "../styles/contact.css"
import { useTranslation } from "react-i18next"

const Contact = () => {

    const { t } = useTranslation()

    return (
        <div className="contact">
            <Metadata title={t('home.secondTitle')} />
            <Title title={t('home.secondTitle')} />
            <ContactForm />
        </div>
    )

}

export default Contact