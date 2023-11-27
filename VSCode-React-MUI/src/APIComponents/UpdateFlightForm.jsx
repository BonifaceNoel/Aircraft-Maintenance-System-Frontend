import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LinearProgress from '@mui/material/LinearProgress';

const UpdateFlightForm = ({ data, onClose, open }) => {
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
        fetch(``, {
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
                {console.log(updateData)}
                <TextField
                    label="Flight ID"
                    name="flight_id"
                    margin="dense"
                    value={updateData.aircraft_id}
                    onChange={handleChange}
                    fullWidth
                />
                {/* <TextField
                    label="Chassis No"
                    name="reg_num"
                    margin="dense"
                    value={updateData.reg_num}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Flight Model"
                    name="flight_model"
                    margin="dense"
                    value={updateData.flight_model}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Airline"
                    name="airline"
                    margin="dense"
                    value={updateData.airline}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Airline ID"
                    name="airline_id"
                    margin="dense"
                    value={updateData.airline_id}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Flight Class"
                    name="flight_class"
                    margin="dense"
                    value={updateData.flight_class}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    label="Flight Status"
                    name="flight_status"
                    margin="dense"
                    value={updateData.flight_status}
                    onChange={handleChange}
                    fullWidth
                />
                <Select
                    name="flight_status"
                    sx={{ marginTop: 1 }}
                    value={updateData.flight_status}
                    onChange={handleChange}
                    fullWidth
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        <Typography sx={{ color: 'grey' }}>Select Flight Status</Typography>
                    </MenuItem>
                    <MenuItem value="On Time">On Time</MenuItem>
                    <MenuItem value="Delayed">Delayed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>*/}
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

export default UpdateFlightForm;
