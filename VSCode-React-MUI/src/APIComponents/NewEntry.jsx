import React, { useState } from 'react';
import Button from '@mui/material/Button';
import NewFlight from './NewFlight';
import NewMaintenance from './NewMaintenance';

const NewEntry = () => {
    const [flight, setFlight] = useState(false);
    const [maintenance, setMaintenance] = useState(false);

    const flightOpen = () => {
        setFlight(true);
    };

    const flightClose = () => {
        setFlight(false);
    };

    const maintenanceOpen = () => {
        setMaintenance(true);
    };

    const maintenanceClose = () => {
        setMaintenance(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={flightOpen} style={{marginLeft: '20px', marginTop: '-20rem'}}>
                Open New Flight Form
            </Button>
            <Button variant="contained" onClick={maintenanceOpen} style={{ marginLeft: '20px', marginTop: '-20rem' }}>
                Open New maintenance Form
            </Button>
            <NewFlight open={flight} onClose={flightClose}></NewFlight>
            <NewMaintenance open={maintenance} onClose={maintenanceClose}></NewMaintenance>
        </div>
    )
}

export default NewEntry;