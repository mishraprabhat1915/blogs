import React from 'react'
import { Link } from "react-router-dom"
import Buttons from './Buttons'
const Header = ({ hasHiddenButton }) => {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between m-2'>
        <div className='p-1'><Link
          style={{ textDecoration: 'none', color: "black", fontSize: "1.5rem", fontWeight: "600" }}
          to="/">EQAIM BLOG </Link></div>
        {
          !hasHiddenButton ?
            <Buttons text="Upload" link="/upload-blog" />
            :
            <div></div>}
      </div>
    </div>
  )
}

export default Header