import LodgeSelector from "../components/Lodges/LodgeSelector"
import LodgeStructure from "../components/Lodges/LodgeStructure"
import Metadata from "../components/Metadata"
// hooks
import { useState } from "react"
const Lodges = () => {

    const [currentLodge, setCurrentLodge] = useState({
        name: 'The Roost 1'
    })

    return (
        <>
            <Metadata title={'Lodges'}/>
            <LodgeSelector lodges={[{name: 'The Roost 1'},{name: 'The Roost 2'},{name: 'The Roost 3'}]} setCurrentLodge={setCurrentLodge}/>
            <LodgeStructure lodge={currentLodge} />

        </>
    )

}

export default Lodges