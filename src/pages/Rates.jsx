import { useState } from "react"
import LodgeSelector from "../components/Lodges/LodgeSelector"
import Metadata from "../components/Metadata"
import Included from "../components/Rates/Included"
import "../styles/rates.css"
import { useTranslation } from "react-i18next"
const Rates = () => {

    const { t } = useTranslation()

    const lodges = t('lodges', { returnObjects: true });

    const [currentLodge, setCurrentLodge] = useState(lodges[0])

    return (
        <div className="rates-container">
            <Metadata title={t('ratesPage.title')} />
            <LodgeSelector lodges={lodges} setCurrentLodge={setCurrentLodge} />
            <div className="rates-data">
                <h2>{t('ratesPage.title')}</h2>
                <h3>{currentLodge.rates.season}</h3>
                <small> {t('ratesPage.commentary')} </small>
                <p>{currentLodge.rates.description}</p>
            </div>
            <Included 
                included={currentLodge.rates.included} 
                notIncluded={currentLodge.rates.notIncluded}
            />
        </div>
    )

}

export default Rates