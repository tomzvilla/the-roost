import useWindowDimensions from "../../hooks/useWindowsDimensions"

const LodgeLocation = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <div className='lodge-carousel-title lodge-carousel-title--extra'>
                <h2>Location</h2>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27698.626156050464!2d-62.10669339905908!3d-29.79724734029595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1700355750006!5m2!1ses-419!2sar" 
                width={width}
                height="600"
                allowFullscreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    )

}

export default LodgeLocation