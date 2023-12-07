import rifle from '../../assets/rifle.png'
import bed from '../../assets/bed.png'
import outfitter from '../../assets/outfitter.png'
import hunters from '../../assets/hunters.png'

import "../../styles/lodgeServices.css"
import { useTranslation } from 'react-i18next'

const images = {
    rifle,
    bed,
    outfitter,
    hunters,
}

const LodgeServices = (props) => {

    const { services } = props
    const { t } = useTranslation()

    return (
        <>
            <div className='service-title'>
                <h2>{t('lodgePage.services')}</h2>
            </div>
            <div className="lodge-services">
                {services.map(service =>
                    <div key={service.name} className="service">
                        <img src={images[service.imgSrc]} alt="" />
                        <p>{service.name}</p>
                        <small>{service.description}</small>
                    </div>
                )}
            </div>
        </>

    )

}

export default LodgeServices