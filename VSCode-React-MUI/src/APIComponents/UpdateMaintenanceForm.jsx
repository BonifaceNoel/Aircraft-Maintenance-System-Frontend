import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UpdateMaintenanceForm = ({ data, onClose, open }) => {
    const [updateData, setUpdateData] = useState({});

    useEffect(() => {
        setUpdateData(data);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdateData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleArrivalChange = (date) => {
        // Update the arrival_date property in formData
        setUpdateData({
            ...updateData,
            arrival_date: date,
        });
    };

    const handleCompletionChange = (date) => {
        // Update the completion_date property in formData
        setUpdateData({
            ...updateData,
            completion_date: date,
        });
    };

    const handleUpdate = () => {
        // Make a PUT request to update the maintenance details
        fetch(`http://localhost:8090/apihome/updateDamage/${updateData.maintenance_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then((response) => {
                if (response.ok) {
                    // If update is successful, trigger the onUpdate callback
                    onClose();
                } else {
                    console.error('Error updating record:', response.statusText);
                }
            })
            .catch((error) => console.error('Error updating record:', error));
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Update Maintenance Details</DialogTitle>
            <DialogContent>
                {console.log(data)}
                <TextField
                    label="Maintenance ID"
                    name="maintenance_id"
                    margin="dense"
                    value={updateData.maintenance_id}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Flight ID"
                    name="flight_id"
                    margin="dense"
                    value={updateData.flight_id}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Maintenance Type"
                    name="maintenance_type"
                    margin="dense"
                    value={updateData.maintenance_type}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Issue Description"
                    name="issue_description"
                    margin="dense"
                    value={updateData.issue_description}
                    onChange={handleChange}
                    fullWidth
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Arrival Date"
                            format="YYYY/MM/DD"
                            value={updateData.arrival_date}
                            onChange={handleArrivalChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Completion Date"
                            format="YYYY/MM/DD"
                            value={updateData.completion_date}
                            onChange={handleCompletionChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <Select
                    name="maintenance_status"
                    sx={{ marginTop: 1 }}
                    value={updateData.maintenance_status}
                    onChange={handleChange}
                    fullWidth
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        <Typography sx={{ color: 'grey' }}>Select Maintenance Status</Typography>
                    </MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                </Select>
                <TextField
                    label="Maintenance Progress"
                    name="maintenance_progress"
                    margin="dense"
                    style={{ marginTop: 12 }}
                    value={updateData.maintenance_progress}
                    onChange={handleChange}
                    fullWidth
                />
                </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} color="primary">
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateMaintenanceForm;
