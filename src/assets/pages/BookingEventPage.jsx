import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()  
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({ 
        eventId: id, 
        firstName: '', 
        lastName: '', 
        email: '', 
        streetName: '', 
        postalCode: '', 
        city: '',
        ticketQuantity: 1 
    })

    useEffect(() => {
        getEvent()
    }, [])
    
    const getEvent = async () => {
        try {
            const res = await fetch(`https://eventservice22-gyhcgtecb6gcexft.swedencentral-01.azurewebsites.net/api/Events/${id}`)
            //const res = await fetch(`https://localhost:7207/api/Events/${id}`)  //Local Db
            if (!res.ok) throw new Error("Failed to fetch event")
            
            const data = await res.json()
            setEvent(data.result)
        } catch (err) {
            console.error(err)
        }
    }

    const postBooking = async () => {
        try {
            const res = await fetch(`https://bookingservice22-gqbsaqdvd6f8cdfv.swedencentral-01.azurewebsites.net/api/Bookings`, {
            //const res = await fetch(`https://localhost:7254/api/Bookings`, { //Local Db
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                console.error("Booking failed")
            } else {
                console.error("Booking successful")
                navigate('/')
            }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postBooking()
    }
    
    //useEffect(() => {
    //    getEvent()
    //}, [])

    return (
        <section id="booking-event">
        <div className="booking-event-card">
            <h4 className="bookingEventTitle">Booking Event - {event.title}</h4>
            <div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="Your first name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Your last name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="Your email address" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Street Name</label>
                        <input type="text" placeholder="Your street address" name="streetName" value={formData.streetName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" placeholder="Your postal code" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" placeholder="Your city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Ticket Quantity</label>
                        <input type="text" placeholder="Number of tickets you want to order" name="ticketQuantity" value={formData.ticketQuantity} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-book-event">Book Now</button>
                </form>
            </div>
        </div>
        </section>
    )
}

export default BookingEventPage