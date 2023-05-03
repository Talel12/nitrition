import React from 'react'
import DoctorInformations from '../components/DoctorInformations'
import ScrolledButton from '../components/ScrolledButton'
import Header from '../components/Header'
import "../styles/Home.css";
import Newsletter from '../components/Newsletter';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <main>
                    <DoctorInformations />
                    <Newsletter />
                    <Gallery/>
                    <CallToAction />
                    <Map/>
                    <Footer />

                </main>
            </div>
            <ScrolledButton />
        </>
    )
}

export default Home