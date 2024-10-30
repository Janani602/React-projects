import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, Box, Snackbar } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookRoom = () => {
    const { roomId } = useParams();
    const [room, setRoom] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+1'); // Default country code
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [error, setError] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/rooms/${roomId}`) // Replace with the correct API endpoint
            .then((response) => {
                setRoom(response.data);
            })
            .catch((error) => {
                console.error('Error fetching room data:', error);
                setError('Failed to fetch room data');
            });
    }, [roomId]);

    const handleBooking = (e) => {
        e.preventDefault();
        // Check if the phone number is exactly 10 digits
        if (phone.length !== 10) {
            setError('Phone number must be exactly 10 digits.');
            return;
        }

        // Here, you can handle booking logic (e.g., API call to save booking)
        const bookingDetails = {
            name,
            email,
            phone: `${countryCode} ${phone}`, // Include country code
            checkInDate,
            checkOutDate,
            roomId,
        };
        console.log('Booking details:', bookingDetails); // Replace with actual booking logic
        setConfirmationMessage('Booking confirmed! Thank you for your reservation.'); // Show confirmation message
        // Reset fields if needed
        setName('');
        setEmail('');
        setPhone('');
        setCheckInDate('');
        setCheckOutDate('');
    };

    const handleCloseSnackbar = () => {
        setConfirmationMessage('');
        navigate('/home'); // Redirect to home after closing the snackbar
    };

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!room) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Book Room: {room.type}
            </Typography>
            <Typography variant="body1">Price: ${room.price}</Typography>
            <form onSubmit={handleBooking}>
                <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    inputProps={{
                        maxLength: 10, // Restrict input to 10 characters
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <Box sx={{ mr: 1 }}>
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        style={{ border: 'none', outline: 'none', fontSize: 'inherit' }}
                                    >
                                        <option value="+1">+1 (USA)</option>
                                        <option value="+91">+91 (India)</option>
                                        <option value="+44">+44 (UK)</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                </Box>
                            ),
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="Check-In Date"
                    variant="outlined"
                    margin="normal"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="Check-Out Date"
                    variant="outlined"
                    margin="normal"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                        },
                    }}
                />
                <Box sx={{ mt: 2 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Book Now
                    </Button>
                </Box>
            </form>

            {/* Snackbar for confirmation message */}
            <Snackbar
                open={!!confirmationMessage}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={confirmationMessage}
            />
        </Container>
    );
};

export default BookRoom;
