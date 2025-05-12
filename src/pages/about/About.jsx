import React from 'react'
import AboutUs from '../../components/About/AboutUs'
import FaqData from '../../components/Faqdata/FaqData'
import ContactUs from '../../components/ContactUs/ContactUs'
import CertCardList from '../../components/CertCardList/CertCardList'

const About = () => {
  return (
    <div>
      <AboutUs/>
      <ContactUs/>    
      <FaqData/>
      <CertCardList/>
    </div>
  )
}

export default About
