import React from 'react'
import { Link } from 'react-router-dom'

export default function comButton() {
  return (
    <div>
        <Link to="/gatos">
            <button className='bg-rose-300 w-20 h-12 rounded text-large font-semibold'/* onClick={this.handleClick} */ >Gatos</button>
        </Link>
    </div>
  )
}