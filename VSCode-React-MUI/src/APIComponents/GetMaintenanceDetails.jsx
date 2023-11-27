import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import UpdateMaintenanceForm from './UpdateMaintenanceForm';

const GetMaintenanceDetails = () => {
    const [data, setData] = useState([]);

    const [updatePopupOpen, setUpdatePopupOpen] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const handleUpdateClick = (data) => {
        // Set the maintenanceId to update and open the popup
        setSelectedData(data)
        setUpdatePopupOpen(true);
    };

    const handleUpdatePopupClose = () => {
        // Close the popup
        setUpdatePopupOpen(false);
    };

    useEffect(() => {
        // Fetch data from the backend API
        fetch('http://localhost:8090/apihome/maintenance')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once after the component mounts

    const handleDelete = (maintenanceId) => {
        // Make a DELETE request to delete the record
        fetch(`http://localhost:8090/apihome/deleteRecord/${maintenanceId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    // If deletion is successful, update the state to remove the deleted record
                    setData((prevData) => prevData.filter((row) => row.maintenance_id !== maintenanceId));
                    window.location.reload();
                } else {
                    console.error('Error deleting record:', response.statusText);
                }
            })
            .catch((error) => console.error('Error deleting record:', error));
    };

    return (
        <div>
            <Typography variant='h4' style={{ marginTop: '70px', marginRight: '10px' }}>Get Maintenance Details</Typography>
            <TableContainer component={Paper} style={{ width: '105%', overflowX: 'auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>SI No</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance ID</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Flight ID</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance Type</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Issue Description</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Arrival Date</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Completion Date</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance Status</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Maintenance Progress</TableCell>
                            <TableCell style={{ width: 'auto', fontWeight: 'bolder' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={row.aircraft_id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row.maintenance_id}</TableCell>
                                <TableCell>{row.flight_id}</TableCell>
                                <TableCell>{row.maintenance_type}</TableCell>
                                <TableCell>{row.issue_description}</TableCell>
                                <TableCell>{row.arrival_date}</TableCell>
                                <TableCell>{row.completion_date}</TableCell>
                                <TableCell>{row.maintenance_status}</TableCell>
                                <TableCell>{row.maintenance_progress}<LinearProgress variant="determinate" color="secondary" value={row.maintenance_progress} /></TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDelete(row.maintenance_id)}
                                        style={{ marginRight: '8px' }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={() => handleUpdateClick(row)}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {updatePopupOpen &&
                <UpdateMaintenanceForm
                    data={selectedData}
                    onClose={handleUpdatePopupClose}
                    open={updatePopupOpen}
                />}
        </div>
    );
};

export default GetMaintenanceDetails;