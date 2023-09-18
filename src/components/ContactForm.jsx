import '../styles/contactForm.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const form = useRef();

    const [contact, setContact] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    })

    const sendEmail = (e) => {
        e.preventDefault()
        const prevErrors = {...errors}
        if(contact.nombre === '') {
            prevErrors.nombre = 'Debe ingresar un nombre'
        } else {
            prevErrors.nombre = ''
        }
        if(contact.email === '') {
            prevErrors.email = 'Debe ingresar un email'
        } else if(!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i).test(contact.email)){
            prevErrors.email = 'Debe ingresar un email valido'
        }
        else {
            prevErrors.email = ''
        }
        if(contact.asunto === '') {
            prevErrors.asunto = 'Debe ingresar un asunto'
        } else {
            prevErrors.asunto = ''
        }
        if(contact.mensaje === '') {
            prevErrors.mensaje = 'Debe ingresar un mensaje'
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
                    Nombre <span>&#x2a;</span>
                    <input 
                        type="text"
                        name='nombre'
                        value={contact.nombre}
                        onChange={handleChange}
                    />
                </label>
                {errors.nombre && <small>{errors.nombre}</small>}
                <label>
                    Email <span>&#x2a;</span>
                    <input 
                        type="email"
                        name='email'
                        value={contact.email}
                        onChange={handleChange}
                    />
                </label>
                {errors.email && <small>{errors.email}</small>}
                <label>
                    Asunto <span>&#x2a;</span>
                    <input 
                        type="text" 
                        name='asunto'
                        value={contact.asunto}
                        onChange={handleChange}
                    />
                </label>
                {errors.asunto && <small>{errors.asunto}</small>}
                <label>
                    Mensaje <span>&#x2a;</span>
                    <textarea name="mensaje" cols="30" rows="5" value={contact.mensaje} onChange={handleChange}></textarea>
                </label>
                <br/>
                <br/>
                {errors.mensaje && <small>{errors.mensaje}</small>}
                <button type='submit' className='buttonForm'>Enviar</button>
            </form>
        </section>
    )

}

export default ContactForm