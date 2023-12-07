import useWindowDimensions from "../../hooks/useWindowsDimensions"
import { useTranslation } from "react-i18next";

const LodgeLocation = (props) => {
    const { height, width } = useWindowDimensions();
    const { t } = useTranslation()

    return (
        <>
            <div className='lodge-carousel-title lodge-carousel-title--extra'>
                <h2>{t('lodgePage.location')}</h2>
            </div>
            <iframe 
                src={props.location}
                width={width - 20}
                height="600"
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    )

}

export default LodgeLocation