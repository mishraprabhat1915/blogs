import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link, useParams } from "react-router-dom"
import Data from "../Data"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogsPage = () => {
  let { Id } = useParams();

  const blogData = Data.filter((val) => {
    // eslint-disable-next-line
    return val.Id == Id;
  })

  return (
    <>
      <Header hasHiddenButton />
      <div className='row'>
        <div
          className='col-1 col-sm-1  d-flex justify-content-center align-item-center'>
          <Link to="/">
            <FontAwesomeIcon
              style={{ fontSize: "2rem", color: 'black', padding: '1rem' }} icon={faHome} />
          </Link>
        </div>
        <div className='col-10 col-sm-10'>
          {blogData.length !== 0 ?
            blogData.map(ele => <div
              key={ele.Id}
              style={{ height: "80vh", width: "100vw" }}
              className='d-flex justify-content-start align-item-center'>
              <div className="card text-dark bg-light mb-3" style={{ width: "80%", height: "auto" }}>
                <div className="card-header"><h4>{ele.title}</h4></div>
                <div className="card-body">
                  <p className="card-text">{ele.summary}</p>
                </div>
              </div>
            </div>)
            :
            <div>Data not available.</div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogsPage