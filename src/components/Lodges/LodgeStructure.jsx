import logoTeros from '../../assets/teros.png'
import logoPicazo from '../../assets/picazo.png'
import logoMataco from '../../assets/mataco.png'

import "../../styles/lodgeStructure.css"

import LodgeCarousel from './LodgeCarousel'
import LodgeLocation from './LodgeLocation'
import LodgeServices from './LodgeServices'

const lodgeImage = {
    "El Mataco Lodge": logoMataco,
    "Los Teros Lodge": logoTeros,
    "Picazo Lodge": logoPicazo,
}

const LodgeStructure = (props) => {

    const { lodge } = props

    return(
        <div className="lodge-container">
            <div className='data-container'>
                <div className="logo-container">
                    <img src={lodgeImage[lodge.name]} alt="Logo for lodge" />
                </div>
                <div className="lodge-data">
                    <h2 className='lodge-title'>{lodge.name}</h2>
                    <p>
                        {lodge.description}
                    </p>
                </div>
            </div>
            <LodgeServices services={lodge.services} />
            <LodgeCarousel imgs={lodge.images} />
            <LodgeLocation location={lodge.location} />
        </div>
    )

}

export default LodgeStructure