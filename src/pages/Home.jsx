import React from 'react'
import Section1 from '../components/section/Section1'
import Section2 from '../components/section/Section2'
import Section3 from '../components/section/Section3'
import Footer from '../components/section/Footer'

const Home = () => {
  return (
    <div>
        <main className="overflow-hidden">
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </main>
    </div>
  )
}

export default Home