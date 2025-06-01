import React from 'react'

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
        <Nav />
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default PortalLayout