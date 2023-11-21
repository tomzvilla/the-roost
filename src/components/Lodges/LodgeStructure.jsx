import logo from '../../assets/logo-roost.png'
import "../../styles/lodgeStructure.css"

import LodgeCarousel from './LodgeCarousel'
import LodgeLocation from './LodgeLocation'
import LodgeServices from './LodgeServices'

const LodgeStructure = (props) => {

    const { lodge } = props

    return(
        <div className="lodge-container">
            <div className='data-container'>
                <div className="logo-container">
                    <img src={logo} alt="Logo for lodge" />
                </div>
                <div className="lodge-data">
                    <h2 className='lodge-title'>{lodge.name}</h2>
                    <p>
                        A sophisticated and luxurious estancia situated on a 2,500 acre ranch, with 150 acres of the pristine untouched Argentine native woodlands, along the Salado River. Located in the Province of Buenos Aires, just a short 2-hour drive from the city, Los Crestones Lodge offers epic duck hunting over decoys combined with perdiz over dogs and spectacular dove shooting. Los Crestones Lodge features 10 elegantly appointed bedrooms, each with King bed and private bath, and can host up to a maximum of 8 hunters, as well as opportunities for non-hunting companions to join.
                    </p>
                </div>
            </div>
            <LodgeServices />
            <LodgeCarousel />
            <LodgeLocation />
        </div>
    )

}

export default LodgeStructure