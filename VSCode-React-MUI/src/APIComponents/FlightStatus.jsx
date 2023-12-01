import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const FlightStatus = () => {
    const [data, setData] = useState([]);

    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);

        fetch(`http://localhost:8090/apihome/flightsstatus/${value}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
}

    return (
        <div>
            <Typography variant='h4' style={{ marginRight: '10px' }}>Total Flights Under Maintenance</Typography>
            <Typography variant style={{ width: 'auto', fontWeight: 'bolder' }}>Status of Completion:  </Typography>
            <Select value={selectedValue} onChange={handleDropdownChange}>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
            </Select>
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
                            <TableRow key={index}>
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

export default FlightStatus;