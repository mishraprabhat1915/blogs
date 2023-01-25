import React from 'react'
import Header from "../Components/Header"
import Cards from "../Components/Cards"
import Footer from "../Components/Footer"
import Data from "../Data"
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
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
        <div className="container d-flex justify-content-end">
          <Link to="/">
            <FontAwesomeIcon
              style={{ fontSize: "2rem", color: 'black', padding: '1rem' }} icon={faCloudUpload} />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage