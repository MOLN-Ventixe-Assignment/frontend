import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/icons/ventixe-logotype-icon.svg'

const Nav = () => {
  return (
    <nav>
        <Link className="ventixe-logotype" to="/">
            <img src={Logo} alt="Ventixe Events" />
            <span>Ventixe</span>
        </Link>

        <div className="nav-links">
            <NavLink className="nav-link" to="/"><i class="fa-light fa-ticket-perforated"></i>Events</NavLink>
            {/* <NavLink className="nav-link" to="/events/booking/:id"><i class="fa-light fa-ticket-perforated"></i>Booking</NavLink> */}
        </div>
    </nav>
  )
}

export default Nav