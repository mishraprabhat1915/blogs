import React from 'react'
import { Link } from "react-router-dom"
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({ hasHiddenButton }) => {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between m-2'>
        <div className='p-1'><Link
          style={{ textDecoration: 'none', color: "black", fontSize: "1.5rem", fontWeight: "600" }}
          to="/">EQAIM BLOG </Link></div>
        {
          !hasHiddenButton ?
            <Link to="/">
              <FontAwesomeIcon
                style={{ fontSize: "2rem", color: 'black', padding: '1rem' }} icon={faCloudUpload} />
            </Link>
            :
            <div></div>}
      </div>
    </div>
  )
}

export default Header