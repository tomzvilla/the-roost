import CarouselPage from '../components/CarouselPage';
import RoostCard from '../components/RoostCard';
import LodgeSection from '../components/LodgeSection';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
import Metadata from '../components/Metadata';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t } = useTranslation()

    return (
        <>
            <Metadata title={t('navigation.home')} />
            <CarouselPage />
            <RoostCard />
            <Title title={t('home.firstTitle')} />
            <LodgeSection />
            <Title title={t('home.secondTitle')} moreMargin={true} />
            <ContactForm />
        </>
    )

}

export default Home