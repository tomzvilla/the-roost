import lodgeRoost from '../assets/lodge_roost.jpg'
import doveImg from '../assets/dove.png'
import pigeonImg from '../assets/pigeon.png'
import duckImg from '../assets/duck.png'
import perdizImg from '../assets/perdiz.png'
import '../styles/lodgeCard.css'

import { useState } from 'react'

const LodgeCard = () => {

    const [details, setDetails] = useState(false)

    return (
        <div onMouseOver={() => setDetails(true)} onMouseOut={() => setDetails(false)} className='lodgeCard'>
            <img className='lodgeImg' src={lodgeRoost} alt="the roost lodge" />
            <h3 className='lodgeName'>The Roost </h3>
            <p className='lodgeLocation'>Location: Santiago del Estero, Argentina</p>
            <div style={{opacity: !details ? "0" : "1",}} className='lodgeHunts'>
                <img src={doveImg} alt="dove" title='dove'/>
                <img src={pigeonImg} alt="pigeon" title='pigeon'/>
                <img src={duckImg} alt="duck" title='duck'/>
                <img src={perdizImg} alt="perdiz" title='perdiz'/>
            </div>
        </div>
    )

}

export default LodgeCard