import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = (props) => {
    return (
        <div className='p-2'>
            <Link to={props.link}><button type="button" className="btn btn-primary">  {props.text}  </button></Link>
        </div>
    )
}

export default Buttons