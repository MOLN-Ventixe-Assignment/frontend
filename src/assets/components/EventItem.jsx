import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`}>
        <div className="event-card">
            <div className="card-img-container"></div>
            <div>{item}</div>
            <div>{item.title}</div>
            <div>{item.location}</div>
        </div>
    </Link>
  )
}

export default EventItem