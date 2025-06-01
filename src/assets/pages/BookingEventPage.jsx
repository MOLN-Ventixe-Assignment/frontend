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
        <div>
            <h1>Booking Event - {event.title}</h1>
            <div>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Street Name</label>
                        <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Ticket Quantity</label>
                        <input type="text" name="ticketQuantity" value={formData.ticketQuantity} onChange={handleChange} required />
                    </div>
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    )
}

export default BookingEventPage