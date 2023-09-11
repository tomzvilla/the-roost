import logo from '../assets/logo-roost.png'
import "../styles/roost-card.css"

const RoostCard = () => {
    return(
        <div className='roost-card'>
            <img src={logo} alt="the roost logo" />
            <div>
                <p>
                The Roost Argentina es una empresa familiar fundada en las vastas tierras de Argentina, con su sede central en la pintoresca ciudad de Selva, Santiago del Estero. 
                Desde nuestros inicios, nos hemos dedicado apasionadamente a brindar a los amantes de la caza una experiencia única en las tierras argentinas.
                </p>
            </div>
        </div>
    )
}

export default RoostCard