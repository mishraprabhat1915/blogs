import React from 'react'
import Header from "../Components/Header"
import Cards from "../Components/Cards"
import Footer from "../Components/Footer"
import Data from "../Data"
import Buttons from '../Components/Buttons'
const LandingPage = () => {
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-item-center m-4'>
          {Data && Data.map(product => (
            <Cards key={product.Id} product={product} />
          ))}  

        </div>
        <div>
        <Buttons text="Upload" link="/upload-blog" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage