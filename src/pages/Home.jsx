import React, { Fragment } from 'react';

import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularBrand from '../components/popular-brand/PopularBrands';
import ChooseUs from '../components/choose-us/ChooseUs';
import AgePack from '../components/age-pack/AgePack';
import Testimonials from '../components/testimonials/Testimonials';
import Download from '../components/download-section/Download';
import Footer from '../components/footer/Footer';
const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
            <PopularBrand />
            <ChooseUs />
            <AgePack />
            <Testimonials/>
            <Download />
            <Footer />
        </Fragment>

    )
};

export default Home;