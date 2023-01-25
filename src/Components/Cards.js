import React from 'react'
import { Link } from "react-router-dom"
import Buttons from './Buttons'
const Cards = ({ product }) => {
  return (
    <div className='col col-sm-6 col-md-3 col-lg-3'>
      <Link
        style={{ textDecoration: "none" }}
        to={`/blog/${product.Id}`} >
        <div className="card text-dark bg-light m-3" key={product.Id} >
          <div className="card-header"><h4>{product.title}</h4></div>
          <div className="card-body">
            <h6 className="card-title">BLOG DESCRIPTION</h6>
            <p className="card-text">{product.summary.slice(0, 50) + '...'}</p>
            <Buttons text="Read More" link={`/blog/${product.Id}`} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cards