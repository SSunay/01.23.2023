
import React from 'react'
import Footer from '../../layout/footer'
import Customers from '../dinamic-part'
import LegalPart from '../legal-part'
import PracticeArea from '../practice-area'
import PracticeArea2 from '../practice-area-2'
import TopPart from '../top-part'

const HomePage = () => {
  return (
    <div>
        <TopPart/>
        <PracticeArea/>
        <PracticeArea2/>
        <Customers/>
        <LegalPart/>
        
        
    </div>
  )
}

export default HomePage