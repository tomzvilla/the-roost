import LodgeCard from "./LodgeCard"

import '../styles/lodgeSection.css'

import { useTranslation } from "react-i18next"

const LodgeSection = () => {

    const { t } = useTranslation()
    const lodges = t('lodges', { returnObjects: true });

    return (
        <section className="lodgeSection">
            {lodges.map(lodge => <LodgeCard key={lodge.name} lodge={lodge} />)}
        </section>
    )

}

export default LodgeSection