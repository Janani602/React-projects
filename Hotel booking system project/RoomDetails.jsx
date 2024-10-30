// RoomDetails.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/rooms/${id}`)
            .then((response) => {
                setRoom(response.data);
            })
            .catch((error) => {
                console.error('Error fetching room details:', error);
                setError('Failed to fetch room details');
            });
    }, [id]);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!room) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                {room.type}
            </Typography>
            <Card>
                <CardMedia
                    component="img"
                    height="500" // Increased height for a larger image
                    image={room.image}
                    alt={room.type}
                />
                <CardContent>
                    <Typography variant="h6">Price: ${room.price}</Typography>
                    <Typography variant="body2">Location: {room.location}</Typography>
                    <Typography variant="body2">{room.ac ? 'AC Room' : 'Non-AC Room'}</Typography>
                    <Typography variant="body1">Description: {room.description || 'No description available'}</Typography>
                </CardContent>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate('/rooms')}
                >
                    Back to Rooms
                </Button>
            </Card>
        </Container>
    );
};

export default RoomDetails;
