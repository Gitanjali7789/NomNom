import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>"Craving something delicious? Order from Nom Nom and enjoy fresh, tasty meals delivered to your doorstep!"</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header