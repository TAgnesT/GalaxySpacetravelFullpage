import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import TrainingSection from '../components/Training';

const Training = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Training" text="Trainings before and after traveling" />
        <TrainingSection />
        <Footer />
    </div>
  )
}

export default Training