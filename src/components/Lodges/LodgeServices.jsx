import rifle from '../../assets/rifle.png'
import bed from '../../assets/bed.png'
import outfitter from '../../assets/outfitter.png'
import hunters from '../../assets/hunters.png'

import "../../styles/lodgeServices.css"

const LodgeServices = () => {

    return (
        <>
            <div className='service-title'>
                <h2>Services</h2>
            </div>
            <div className="lodge-services">
                <div className="service">
                    <img src={rifle} alt="" />
                    <p>Gun Rental</p>
                    <small> 12, 16 & 20 ga.</small>
                </div>
                <div className="service">
                    <img src={bed} alt="" />
                    <p>Lodging</p>
                    <small>10 hunters</small>
                </div>
                <div className="service">
                    <img src={outfitter} alt="" />
                    <p>Outfitter</p>
                    <small>Proffesional Outfitters</small>
                </div>
                <div className="service">
                    <img src={hunters} alt="" />
                    <p>Huntings</p>
                    <small>Pidgeon, Dove and Duck</small>
                </div>
            </div>
        </>

    )

}

export default LodgeServices