import check from '../../assets/check.svg'
import cross from '../../assets/cross.svg'
import "../../styles/includedList.css"

const Included = (props) => {

    const { included, notIncluded } = props

    return(
        <div className='list-view'>
            <ul>
                <h3>Included</h3>
                {included.map((item, index) => 
                    <div className={'list-item'} key={index}>
                        <img className='list-img' src={check} alt="item is included" />
                        <li>{item}</li>
                    </div>
                )}
            </ul>
            <ul>
                <h3>Not Included</h3>
                {notIncluded.map((item, index) => 
                    <div className={'list-item'} key={index}>
                        <img className='list-img' src={cross} alt="item is not included" />
                        <li>{item}</li>
                    </div>
                )}
            </ul>
        </div>
    )

}

export default Included