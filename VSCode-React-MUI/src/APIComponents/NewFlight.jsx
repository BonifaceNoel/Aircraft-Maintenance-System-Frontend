import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';

const NewFlight = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        aircraft_id: '',
        reg_num: '',
        flight_model: '',
        airline: '',
        airline_id: '',
        flight_class: '',
        flight_status: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Validation state for each form field
    const [validation, setValidation] = useState({
        aircraft_id: true,
        reg_num: true,
        flight_model: true,
        airline: true,
        airline_id: true,
        flight_class: true,
        flight_status: true,
    });

    const validateForm = () => {
        const newValidation = {
            aircraft_id: !!formData.aircraft_id,
            reg_num: !!formData.reg_num,
            flight_model: !!formData.flight_model,
            airline: !!formData.airline,
            airline_id: !!formData.airline_id,
            flight_class: !!formData.flight_class,
            flight_status: !!formData.flight_status,
        };

        setValidation(newValidation);

        // Check if all fields are valid
        return Object.values(newValidation).every((isValid) => isValid);
    };

    // New state for success message
    const [successMessage, setSuccessMessage] = useState('');

    const onClear = () => {
        setFormData({
            aircraft_id: '',
            reg_num: '',
            flight_model: '',
            airline: '',
            airline_id: '',
            flight_class: '',
            flight_status: '',
        })
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:8090/apihome/newflight', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // HTTP status set to success.
                    setSuccessMessage('Hooray!! New Flight Details Added.');
                } else {
                    // Handle the case where the server returns an error status
                    setSuccessMessage('Failed to add details!! Please try again.');
                }
            } catch (error) {
                setSuccessMessage('Failed to add details!! Please try again.');
            }
        };
    }

    return (
        <Dialog open={open} >
            <DialogTitle>Fill New Flight Details
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    aria-label="close"
                    sx={{ position: 'absolute', right: 20, top: 10 }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    label="Aircraft ID"
                    name="aircraft_id"
                    margin="dense"
                    value={formData.aircraft_id}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.aircraft_id}
                    helperText={!validation.aircraft_id && 'Aircraft ID is required'}
                />
                <TextField
                    label="Chassis No"
                    name="reg_num"
                    margin="dense"
                    value={formData.reg_num}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.reg_num}
                    helperText={!validation.reg_num && 'Chassis No is required'}
                />
                <TextField
                    label="Flight Model"
                    name="flight_model"
                    margin="dense"
                    value={formData.flight_model}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.flight_model}
                    helperText={!validation.flight_model && 'Flight Model is required'}
                />
                <TextField
                    label="Airline"
                    name="airline"
                    margin="dense"
                    value={formData.airline}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.airline}
                    helperText={!validation.airline && 'Airline is required'}
                />
                <TextField
                    label="Airline ID"
                    name="airline_id"
                    margin="dense"
                    value={formData.airline_id}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.airline_id}
                    helperText={!validation.airline_id && 'Airline ID is required'}
                />
                <Select
                    name="flight_class"
                    sx={{ marginTop: 1 }}
                    value={formData.flight_class}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.flight_class}
                    helperText={!validation.flight_class && 'Flight Class is required'}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        <Typography sx={{ color: 'grey' }}>Select Flight Class</Typography>
                    </MenuItem>
                    <MenuItem value="Economy">Economy</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="First Class">First Class</MenuItem>
                </Select>
                <Select
                    name="flight_status"
                    sx={{ marginTop: 1.5 }}
                    value={formData.flight_status}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.flight_status}
                    helperText={!validation.flight_status && 'Flight Status is required'}
                    displayEmpty
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
                <Button onClick={onClear}>Clear</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>

            {/* Display success message */}
            {successMessage && (
                <DialogContent>
                    <div style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</div>
                </DialogContent>
            )}
        </Dialog>
    );
}

export default NewFlight;