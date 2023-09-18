import CarouselPage from '../components/CarouselPage';
import RoostCard from '../components/RoostCard';
import LodgeSection from '../components/LodgeSection';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
const Home = () => {

    return (
        <>
            <CarouselPage />
            <RoostCard />
            <Title title='Nuestros Lodges' />
            <LodgeSection />
            <Title title='Contáctanos' moreMargin={true} />
            <ContactForm />
        </>
    )

}

export default Home