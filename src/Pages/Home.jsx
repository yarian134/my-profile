import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HomeCard from '../Components/HomeCard'
import SkillsCard from '../Components/SkillsCard'

const Home = () => {
  return (
    <div>
        <Header/>
         <HomeCard/>
         <SkillsCard/>
        <Footer/>
    </div>
  )
}

export default Home