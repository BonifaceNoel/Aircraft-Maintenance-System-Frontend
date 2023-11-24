import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const FlightsDamaged = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        fetch('http://localhost:8090/apihome/flightdamaged')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the component mounts

    return (
        <div>
            <Typography variant='h4' style={{ marginTop: '70px', marginRight: '10px' }}>Total Flights Under Maintenance</Typography>
            <TableContainer component={Paper} style={{ width: '155%', overflowX: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>SI No</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Aircraft ID</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight Model</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight Status</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance ID</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance Type</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance Status</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Completion Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.aircraft_id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.aircraft_id}</TableCell>
                                <TableCell>{row.flight_model}</TableCell>
                                <TableCell>{row.flight_status}</TableCell>
                                <TableCell>{row.maintenance_id}</TableCell>
                                <TableCell>{row.maintenance_type}</TableCell>
                                <TableCell>{row.maintenance_status}</TableCell>
                                <TableCell>{row.completion_date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default FlightsDamaged;