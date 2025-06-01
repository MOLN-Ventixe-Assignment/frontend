import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import SignUp from './assets/pages/SignUp'
import Login from './assets/pages/Login'

import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEventPage from './assets/pages/BookingEventPage'


function App() {

  return (
    <>
      <Routes>
           {/*
          <Route element={<CenterLayout />}>
              <Route index element={<SignUp />} />
              <Route path="login" element={<Login />} />
          </Route>
          */}
      
          <Route path="/" element={<EventPage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
      </Routes>
    </>
  )
}

export default App
