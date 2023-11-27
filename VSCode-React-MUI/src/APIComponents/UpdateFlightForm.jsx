import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const UpdateFlightForm = ({ data, onClose, open }) => {
    const [updateData, setUpdateData] = useState({});

    useEffect(() => {
        setUpdateData(data);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdateData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        // Make a PUT request to update the maintenance details
        fetch(`http://localhost:8090/apihome/updateflight/${updateData.aircraft_id}`, {
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
                    window.location.reload();
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
                <TextField
                    label="Flight ID"
                    name="flight_id"
                    margin="dense"
                    value={updateData.aircraft_id}
                    onChange={handleChange}
                    fullWidth
                    disabled
                />
                <TextField
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
                <InputLabel
                    htmlFor="flight-status-select"
                    style={{ marginBottom: '-10px', fontSize: '0.8rem', marginLeft: '1rem' }}
                >Flight Status
                </InputLabel>
                <Select
                    label="Flight Status"
                    name="flight_status"
                    sx={{ marginTop: 1 }}
                    value={updateData.flight_status || ''}
                    onChange={handleChange}
                    fullWidth
                    displayEmpty
                    inputProps={{
                        name: 'flight_status',
                        id: 'flight-status-select',
                    }}
                >
                    <MenuItem value="" disabled>
                        <Typography sx={{ color: 'grey' }}>Select Flight Status</Typography>
                    </MenuItem>
                    <MenuItem value="On Time">On Time</MenuItem>
                    <MenuItem value="Delayed">Delayed</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
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
