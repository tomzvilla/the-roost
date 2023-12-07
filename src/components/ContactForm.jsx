import '../styles/contactForm.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {

    const form = useRef();
    const { t } = useTranslation()

    const [contact, setContact] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const [success, setSuccess] = useState(false)


    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const sendEmail = (e) => {
        e.preventDefault()
        setSuccess(false)
        const prevErrors = {...errors}
        if(contact.nombre === '') {
            prevErrors.nombre = t('contact.errorMessages.name')
        } else {
            prevErrors.nombre = ''
        }
        if(contact.email === '') {
            prevErrors.email = t('contact.errorMessages.email')
        } else if(!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i).test(contact.email)){
            prevErrors.email = t('contact.errorMessages.invalidEmail')
        }
        else {
            prevErrors.email = ''
        }
        if(contact.asunto === '') {
            prevErrors.asunto = t('contact.errorMessages.subject')
        } else {
            prevErrors.asunto = ''
        }
        if(contact.mensaje === '') {
            prevErrors.mensaje = t('contact.errorMessages.message')
        } else {
            prevErrors.mensaje = ''
        }
        
        if(prevErrors.nombre || prevErrors.email || prevErrors.asunto || prevErrors.mensaje) {
            setErrors(prevErrors)
            return
        }

        setErrors({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: '',
        })

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,  process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            if(result.status === 200) {
                setContact({
                    nombre: '',
                    email: '',
                    asunto: '',
                    mensaje: '',
                })
                setSuccess(true)
            }
        }, (error) => {
            console.log(error.text);
        });


    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setContact({
            ...contact,
            [name]: value
        })
    }

    return (
        <section className='contact'>
            <form onSubmit={sendEmail} ref={form} className='contactForm'>
                <label>
                    {t('contact.name')} <span>&#x2a;</span>
                    <input 
                        type="text"
                        name='nombre'
                        value={contact.nombre}
                        onChange={handleChange}
                    />
                </label>
                {errors.nombre && <small>{errors.nombre}</small>}
                <label>
                    {t('contact.email')} <span>&#x2a;</span>
                    <input 
                        type="email"
                        name='email'
                        value={contact.email}
                        onChange={handleChange}
                    />
                </label>
                {errors.email && <small>{errors.email}</small>}
                <label>
                    {t('contact.subject')} <span>&#x2a;</span>
                    <input 
                        type="text" 
                        name='asunto'
                        value={contact.asunto}
                        onChange={handleChange}
                    />
                </label>
                {errors.asunto && <small>{errors.asunto}</small>}
                <label>
                    {t('contact.message')} <span>&#x2a;</span>
                    <textarea name="mensaje" cols="30" rows="5" value={contact.mensaje} onChange={handleChange}></textarea>
                </label>
                <br/>
                <br/>
                {errors.mensaje && <small>{errors.mensaje}</small>}
                {success &&  <p className='success'> {t('contact.success')}</p>}
                <button type='submit' className='buttonForm'>{t('contact.button')}</button>
            </form>
        </section>
    )

}

export default ContactForm