import { useState } from "react"
import LodgeSelector from "../components/Lodges/LodgeSelector"
import Metadata from "../components/Metadata"
import Included from "../components/Rates/Included"
import "../styles/rates.css"

const Rates = () => {

    const [currentLodge, setCurrentLodge] = useState({
        name: 'The Roost'
    })

    return (
        <div className="rates-container">
            <Metadata title={'Rates'} />
            <LodgeSelector lodges={[{name: 'The Roost 1'},{name: 'The Roost 2'},{name: 'The Roost 3'}]} setCurrentLodge={setCurrentLodge} />
            <div className="rates-data">
                <h2>Rates</h2>
                <h3>Season 2024 - May to July</h3>
                <small> Prices are in US$ and per person </small>
                <p>Rates fluctuate between $1650 and $1850 per person per night, based on single occupancy & shared blind. These rates are flexible based on the month 
                    of the season, number of hunters in the group, and lodge availability— please CONTACT US for an accurate quote.</p>
            </div>
            <Included 
                included={['Lodging', 'Meals, all wines, beer and local spirits (open bar)', 'Hunting Licenses', 'Professional guide service and field assistants', 'Payment to landowners for hunting rights']} 
                notIncluded={['Airfares', 'Transfers to and from the Buenos Aires airport', 'Hotels in Buenos Aires', 'Gun entry permits', 'Gun Rental & Shells', 'Gratuities for guides and house staff']}
            />
        </div>
    )

}

export default Rates