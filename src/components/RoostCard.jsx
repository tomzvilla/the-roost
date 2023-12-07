import logo from '../assets/outfittersLogo.png'
import "../styles/roost-card.css"
import { useTranslation } from 'react-i18next'

const RoostCard = () => {
    const { t } = useTranslation()
    return (
        <div className='roost-card'>
            <img src={logo} alt="the roost logo" />
            <div>
                <p>
                {t('home.description')}
                </p>
                {/* TODO: add call to action */}
            </div>
        </div>
    )
}

export default RoostCard