import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './APIComponents/Home'
import NavBar from './APIComponents/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetFlightsList from './APIComponents/GetFlightsList'
import GetMaintenanceDetails from './APIComponents/GetMaintenanceDetails'
import FlightsDamaged from './APIComponents/FlightsDamaged'
import FlightStatus from './APIComponents/FlightStatus'
import NewEntry from './APIComponents/NewEntry'
import SearchByPK from './APIComponents/SearchByPK'
import LoginPageSector from './APIComponents/LoginPageSector'
import SignUpPage from './APIComponents/SignUpPage'

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPageSector />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/getflights" element={<GetFlightsList />} />
          <Route path="/getmaintenance" element={<GetMaintenanceDetails />} />
          <Route path="/flightsdamaged" element={<FlightsDamaged />} />
          <Route path="/flightstatus" element={<FlightStatus />} />
          <Route path="/newflight" element={<NewEntry />} />
          <Route path="/searchbyid" element={<SearchByPK />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
