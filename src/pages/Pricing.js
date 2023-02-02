import React from 'react';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';
import PricingCards from '../components/Pricing';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Prices" text="Choose your trip" />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing