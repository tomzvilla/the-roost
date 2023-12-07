import LodgeSelector from "../components/Lodges/LodgeSelector"
import LodgeStructure from "../components/Lodges/LodgeStructure"
import Metadata from "../components/Metadata"
// hooks
import { useState } from "react"
import { useTranslation } from "react-i18next"
const Lodges = () => {

    const { t } = useTranslation()

    const lodges = t('lodges', { returnObjects: true });

    const [currentLodge, setCurrentLodge] = useState(lodges[0])
    
    return (
        <>
            <Metadata title={t('navigation.lodges')}/>
            <LodgeSelector lodges={lodges} setCurrentLodge={setCurrentLodge}/>
            <LodgeStructure lodge={currentLodge} />

        </>
    )

}

export default Lodges