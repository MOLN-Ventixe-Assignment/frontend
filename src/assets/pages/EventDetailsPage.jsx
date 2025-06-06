import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()
    const [event, setEvent] = useState({})
    
    const getEvents = async () => {
        const res = await fetch(`https://eventservice22-gyhcgtecb6gcexft.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        //const res = await fetch(`https://localhost:7207/api/Events/${id}`) //Local Db
    
        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }
    
    useEffect(() => {
        getEvents()
    }, [])
  
    return (
        <section id="event-details">
            <div className="event-details-card">
                <div className="card-img-container"></div>
                <h4 className="eventTitleDetails">{event.title}</h4>
                <div className="eventDate"><i class="fa-light fa-calendar-lines"></i>{event.displayDate}</div>
                <div className="eventLocation"><i class="fa-regular fa-location-dot"></i>{event.location}</div>
                <div class="divider"></div>
                <div className="about">About Event</div>
                <div className="eventDescription">{event.description}</div>
                <Link className="btn btn-book" to={`/events/booking/${id}`}>Book Event</Link>
            </div>
        </section>
    )
           
}

export default EventDetailsPage