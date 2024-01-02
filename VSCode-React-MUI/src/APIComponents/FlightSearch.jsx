import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavBar from './NavBar';

const FlightSearch = ({ open, onClose, aircraftId }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8090/apihome/flightsbyid/${aircraftId}`);
                if (response.ok) {
                    const data = await response.json();
                    setTableData(data);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        if (open) {
            fetchData();
        }
    }, [open, aircraftId]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Flight Details</DialogTitle>
            <DialogContent>
                <div style={{ overflowX: 'auto' }}>
                    <Table>
                        <TableBody>
                            {tableData.map((row, index) => (
                                <React.Fragment key={index}>
                                    <TableRow>
                                        <TableCell ><strong >Aircraft ID:</strong> {row.aircraft_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Chassis No:</strong> {row.reg_num}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Flight Model:</strong> {row.flight_model}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Airline:</strong> {row.airline}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Airline ID:</strong> {row.airline_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Flight Class:</strong> {row.flight_class}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Flight Status:</strong> {row.flight_status}</TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </DialogContent>
        </Dialog>

    );
};

export default FlightSearch;
