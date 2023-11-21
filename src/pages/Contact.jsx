import ContactForm from "../components/ContactForm"
import Metadata from "../components/Metadata"
import Title from "../components/Title"
import "../styles/contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <Metadata title={'Contacto'} />
            <Title title='Conctacto' />
            <ContactForm />
        </div>
    )

}

export default Contact