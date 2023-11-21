import "../../styles/lodgeSelector.css"

const LodgeSelector = (props) => {

    const { lodges } = props

    return (
        <div className="lodge-selector">
            { lodges.map((lodge, index) =>
                <button key={index} onClick={() => props.setCurrentLodge(lodge)}>
                    {lodge.name}
                </button>) }
        </div>
    )

}

export default LodgeSelector