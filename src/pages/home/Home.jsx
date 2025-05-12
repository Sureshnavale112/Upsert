import React from 'react'
import EmpowerSection from '../../components/EmpowerSection/EmpowerSection';
import WhyUpcertSection from '../../components/WhyUpcertSection/WhyUpcertSection';
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard';
import CertCardList from '../../components/CertCardList/CertCardList';

const Home = () => {
  return (
    
    <div>
       <WhyUpcertSection/>
       <ChallengeCard/>
       <EmpowerSection/>
       <CertCardList/>
     </div>
  )
}

export default Home;
