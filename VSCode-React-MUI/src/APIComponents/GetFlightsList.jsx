import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

const GetFlightsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        fetch('http://localhost:8090/apihome/flights')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the component mounts

    const handleDelete = (aircraftId) => {
        // Make a DELETE request to delete the record
        fetch(`http://localhost:8090/apihome/deleteFlight/${aircraftId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    // If deletion is successful, update the state to remove the deleted record
                    setData((prevData) => prevData.filter((row) => row.aircraft_id !== aircraftId));
                    window.location.reload();
                } else {
                    console.error('Error deleting record:', response.statusText);
                }
            })
            .catch((error) => console.error('Error deleting record:', error));
    };

    return (
        <div>
            <Typography variant='h4' style={{ marginTop: '70px', marginRight: '10px' }}>Get Flight Details</Typography>
            <TableContainer component={Paper} style={{ width: '165%', overflowX: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>SI No</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Aircraft ID</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Chassis No</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight Model</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Airline</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Airline No</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight Class</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight Status</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.aircraft_id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.aircraft_id}</TableCell>
                                <TableCell>{row.reg_num}</TableCell>
                                <TableCell>{row.flight_model}</TableCell>
                                <TableCell>{row.airline}</TableCell>
                                <TableCell>{row.airline_id}</TableCell>
                                <TableCell>{row.flight_class}</TableCell>
                                <TableCell>{row.flight_status}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDelete(row.aircraft_id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default GetFlightsList;