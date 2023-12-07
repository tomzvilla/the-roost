import check from '../../assets/check.svg'
import cross from '../../assets/cross.svg'
import "../../styles/includedList.css"

import { useTranslation } from 'react-i18next'

const Included = (props) => {

    const { included, notIncluded } = props
    const { t } = useTranslation()

    return(
        <div className='list-view'>
            <ul>
                <h3>{t('ratesPage.included')}</h3>
                {included.map((item, index) => 
                    <div className={'list-item'} key={index}>
                        <img className='list-img' src={check} alt="item is included" />
                        <li>{item.service}</li>
                    </div>
                )}
            </ul>
            <ul>
                <h3>{t('ratesPage.notIncluded')}</h3>
                {notIncluded.map((item, index) => 
                    <div className={'list-item'} key={index}>
                        <img className='list-img' src={cross} alt="item is not included" />
                        <li>{item.service}</li>
                    </div>
                )}
            </ul>
        </div>
    )

}

export default Included