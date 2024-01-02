import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FlightSearch from './FlightSearch';
import MaintenanceSearch from './MaintenanceSearch';
import backgroundImg from '../../public/flight-1.jpg';
import NavBar from './NavBar';

const SearchByPK = () => {
    const [flightSearch, setFlightSearch] = useState(false);
    const [maintenanceSearch, setMaintenanceSearch] = useState(false);
    const [aircraftId, setAircraftId] = useState('');
    const [maintenanceId, setMaintenanceId] = useState('');

    const flightOpen = () => {
        setFlightSearch(true);
    };

    const flightClose = () => {
        setFlightSearch(false);
    };

    const maintenanceOpen = () => {
        setMaintenanceSearch(true);
    };

    const maintenanceClose = () => {
        setMaintenanceSearch(false);
    };

    const handleAircraftIdChange = (event) => {
        setAircraftId(event.target.value);
    };

    const handleMaintenanceIdChange = (event) => {
        setMaintenanceId(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NavBar />
            <img
                src={backgroundImg}
                alt="Description of the image"
                style={{ width: '100%', height: '45rem', marginTop: '-12.5rem' }}
            />
            {/* Text field for entering Aircraft ID */}
            <TextField
                label="Aircraft ID"
                variant="outlined"
                color='secondary'
                value={aircraftId}
                onChange={handleAircraftIdChange}
                style={{ marginTop: '-30.5rem', marginLeft: '0.5rem', width: '20rem' }}
                InputProps={{ 
                    style: { color: 'white', backgroundColor: 'white' }
                }}
            />

            {/* Search by Aircraft ID */}
            <Button
                variant="contained"
                onClick={flightOpen}
                style={{ margin: '1rem 0', marginLeft: '0.5rem', width: '20rem' }}
            >
                Search by Aircraft ID
            </Button>

            {/* Text field for entering Maintenance ID */}
            <TextField
                label="Maintenance ID"
                variant="outlined"
                color='secondary'
                value={maintenanceId}
                onChange={handleMaintenanceIdChange}
                style={{ margin: '0.5rem 0', marginLeft: '0.5rem', width: '20rem' }}
                InputProps={{
                    style: { color: 'white', backgroundColor: 'white' }
                }}
            />

            {/* Search by Maintenance ID */}
            <Button
                variant="contained"
                onClick={maintenanceOpen}
                style={{ margin: '1rem 0', marginLeft: '0.5rem', width: '20rem' }}
            >
                Search by Maintenance ID
            </Button>

            {/* FlightSearch component with Id as a prop */}
            <FlightSearch open={flightSearch} onClose={flightClose} aircraftId={aircraftId} />
            <MaintenanceSearch open={maintenanceSearch} onClose={maintenanceClose} maintenanceId={maintenanceId} />
        </div>
    );
};

export default SearchByPK;
