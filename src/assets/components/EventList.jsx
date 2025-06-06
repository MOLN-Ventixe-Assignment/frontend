import React, { useState, useEffect } from 'react'
import EventItem from './EventItem'

const EventList = () => {
  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const res = await fetch("https://eventservice22-gyhcgtecb6gcexft.swedencentral-01.azurewebsites.net/api/Events")
    //const res = await fetch("https://localhost:7207/api/Events")  //Local Db

    if (res.ok) {
        const response = await res.json()
        setEvents(response.result)
    }
  }

  useEffect(() => {
        getEvents()
  }, [])
  
  return (
    <section id="events">
        <div className="event-list">
            {
                events.map(event => (<EventItem key={event.id} item={event} />))
            }
        </div>
    </section>
  )
}

export default EventList