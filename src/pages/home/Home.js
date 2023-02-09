import React from 'react'
import CarosalComponent from '../../commonComponent/CarosalComponent'
import CommonCard from '../../commonComponent/CommonCard'
import Header from '../../commonComponent/Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <CarosalComponent/>
     <div className='container'>
       <div className='row'>
       <div className='col col-sm-12 col-md-12 col-lg-12 text-center mt-3' style={{fontWeight:"bold",fontSize:"36px"}}>
         OUR SERVICE
       
       </div>

       
       </div>
     
     </div>

      <CommonCard/>
    </div>
  )
}
