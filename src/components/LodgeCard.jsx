import teros from '../assets/teros-front.jpg'
import doveImg from '../assets/dove.png'
import pigeonImg from '../assets/pigeon.png'
import duckImg from '../assets/duck.png'
import perdizImg from '../assets/perdiz.png'
import mataco from '../assets/mataco10.jpg'
import mataco4 from '../assets/mataco4.jpg'
import picazo from '../assets/picazo-front.jpg'
import '../styles/lodgeCard.css'

import { useState } from 'react'

const images = {
    doveImg,
    pigeonImg,
    duckImg,
    perdizImg
}

const lodgeImage = {
    "El Mataco Lodge": mataco4,
    "Los Teros Lodge": teros,
    "Picazo Lodge": picazo,
}

const LodgeCard = (props) => {

    const [details, setDetails] = useState(false)

    return (
        <div onMouseOver={() => setDetails(true)} onMouseOut={() => setDetails(false)} className='lodgeCard'>
            <img className='lodgeImg' src={lodgeImage[props.lodge.name]} alt={props.lodge.name} />
            <h3 className='lodgeName'>{props.lodge.name} </h3>
            <p className='lodgeLocation'> {props.lodge.locationDescription} </p>
            <div style={{opacity: !details ? "0" : "1",}} className='lodgeHunts'>
                {
                    props.lodge.hunts.map(hunt => {
                        const data = hunt.src.replace('Img','');
                        return (
                            <img src={images[hunt.src]} key={data} alt={data} title={data} />
                        )
                    })
                }
            </div>
        </div>
    )

}

export default LodgeCard