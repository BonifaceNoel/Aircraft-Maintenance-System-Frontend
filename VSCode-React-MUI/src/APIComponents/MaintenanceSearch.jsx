import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import LinearProgress from '@mui/material/LinearProgress';

const MaintenanceSearch = ({ open, onClose, maintenanceId }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(maintenanceId);
                const response = await fetch(`http://localhost:8090/apihome/maintenancebyid/${maintenanceId}`);
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
    }, [open, maintenanceId]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Maintenance Details</DialogTitle>
            <DialogContent>
                <div style={{ overflowX: 'auto' }}>
                    <Table>
                        <TableBody>
                            {console.log(tableData)}
                            {tableData.map((row, index) => (
                                <React.Fragment key={index}>
                                    <TableRow>
                                        <TableCell ><strong >Maintenance ID:</strong> {row.maintenance_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Flight ID:</strong> {row.flight_id}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Maintenance Type:</strong> {row.maintenance_type}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Issue Description:</strong> {row.issue_description}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Arrival Date:</strong> {row.arrival_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Completion Date:</strong> {row.completion_date}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Maintenance Status:</strong> {row.maintenance_status}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><strong>Maintenance Progress:</strong> {row.maintenance_progress}<LinearProgress variant="determinate" color="secondary" value={row.maintenance_progress} /></TableCell>
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

export default MaintenanceSearch;
