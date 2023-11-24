import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FlightSearch from './FlightSearch';
import MaintenanceSearch from './MaintenanceSearch';

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
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem', position: 'relative' }}>

            {/* Text field for entering Aircraft ID */}
            <TextField
                label="Aircraft ID"
                variant="outlined"
                value={aircraftId}
                onChange={handleAircraftIdChange}
                style={{ margin: '0.5rem 0', width: '20rem' }}
            />

            {/* Search by Aircraft ID */}
            <Button
                variant="contained"
                onClick={flightOpen}
                style={{ margin: '1rem 0' }}
            >
                Search by Aircraft ID
            </Button>

            {/* Text field for entering Maintenance ID */}
            <TextField
                label="Maintenance ID"
                variant="outlined"
                value={maintenanceId}
                onChange={handleMaintenanceIdChange}
                style={{ margin: '0.5rem 0', width: '20rem' }}
            />

            {/* Search by Maintenance ID */}
            <Button
                variant="contained"
                onClick={maintenanceOpen}
                style={{ margin: '1rem 0' }}
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
