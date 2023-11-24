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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const NewMaintenance = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        maintenance_id: '',
        flight_id: '',
        maintenance_type: '',
        issue_description: '',
        arrival_date: dayjs(),
        completion_date: dayjs(),
        maintenance_status: '',
        maintenance_progress: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleArrivalChange = (date) => {
        // Update the arrival_date property in formData
        setFormData({
            ...formData,
            arrival_date: date,
        });
    };

    const handleCompletionChange = (date) => {
        // Update the completion_date property in formData
        setFormData({
            ...formData,
            completion_date: date,
        });
    };

    // Validation state for each form field
    const [validation, setValidation] = useState({
        maintenance_id: true,
        flight_id: true,
        maintenance_type: true,
        issue_description: true,
        arrival_date: true,
        completion_date: true,
        maintenance_status: true,
        maintenance_progress: true,
    });

    const validateForm = () => {
        const newValidation = {
            maintenance_id: !!formData.maintenance_id,
            flight_id: !!formData.flight_id,
            maintenance_type: !!formData.maintenance_type,
            issue_description: !!formData.issue_description,
            arrival_date: !!formData.arrival_date,
            completion_date: !!formData.completion_date,
            maintenance_status: !!formData.maintenance_status,
            maintenance_progress: !!formData.maintenance_progress,
        };

        setValidation(newValidation);

        // Check if all fields are valid
        return Object.values(newValidation).every((isValid) => isValid);
    };

    // New state for success message
    const [successMessage, setSuccessMessage] = useState('');

    const onClear = () => {
        setFormData({
            maintenance_id: '',
            flight_id: '',
            maintenance_type: '',
            issue_description: '',
            arrival_date: '',
            completion_date: '',
            maintenance_status: '',
            maintenance_progress: '',
        })
    }

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:8090/apihome/newmaintenance', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    // HTTP status set to success.
                    setSuccessMessage('Hooray!! New Maintenance Details Added.');
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
            <DialogTitle>Fill New Maintenance Details
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
                    label="Maintenance ID"
                    name="maintenance_id"
                    margin="dense"
                    value={formData.maintenance_id}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.maintenance_id}
                    helperText={!validation.maintenance_id && 'Maintenance ID is required'}
                />
                <TextField
                    label="Flight ID"
                    name="flight_id"
                    margin="dense"
                    value={formData.flight_id}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.flight_id}
                    helperText={!validation.flight_id && 'Flight ID is required'}
                />
                <TextField
                    label="Maintenance Type"
                    name="maintenance_type"
                    margin="dense"
                    value={formData.maintenance_type}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.maintenance_type}
                    helperText={!validation.maintenance_type && 'Maintenance Type is required'}
                />
                <TextField
                    label="Issue Description"
                    name="issue_description"
                    margin="dense"
                    value={formData.issue_description}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.issue_description}
                    helperText={!validation.issue_description && 'Issue Description is required'}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Arrival Date"
                            format="YYYY/MM/DD"
                            value={formData.arrival_date}
                            onChange={handleArrivalChange}
                            error={!validation.arrival_date}
                            helperText={!validation.arrival_date && 'Arrival Date is required'}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Completion Date"
                            format="YYYY/MM/DD"
                            value={formData.completion_date}
                            onChange={handleCompletionChange}
                            error={!validation.completion_date}
                            helperText={!validation.completion_date && 'Completion Date is required'}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </DemoContainer>
                </LocalizationProvider>

                <Select
                    name="maintenance_status"
                    sx={{ marginTop: 1 }}
                    value={formData.maintenance_status}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.maintenance_status}
                    helperText={!validation.maintenance_status && 'Maintenance Status is required'}
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
                    value={formData.maintenance_progress}
                    onChange={handleInputChange}
                    fullWidth
                    error={!validation.maintenance_progress}
                    helperText={!validation.maintenance_progress && 'Maintenance Progress is required'}
                />
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

export default NewMaintenance;