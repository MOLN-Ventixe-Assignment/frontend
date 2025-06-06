import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link className="nodecoration" to={`/events/${item.id}`}>
        <div className="event-card">
            <div className="card-img-container"></div>
            <div className="eventDate">{item.displayDate}</div>
            <div><h7 className="eventTitle">{item.title}</h7></div>
            <div className="eventLocation"><i class="fa-regular fa-location-dot"></i>{item.location}</div>
        </div>
    </Link>
  )
}

export default EventItem