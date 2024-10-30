import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Room = () => {
    const [roomsData, setRoomsData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/rooms') // Replace with the correct API endpoint
            .then((response) => {
                setRoomsData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching room data:', error);
                setError('Failed to fetch room data');
            });
    }, []);

    // Function to handle room booking
    const handleBookRoom = (roomId) => {
        navigate(`/book-room/${roomId}`); // Navigate to book-room page with roomId
    };

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Available Rooms
            </Typography>
            <Grid container spacing={3}>
                {roomsData.map((room) => (
                    <Grid item xs={12} sm={6} md={4} key={room.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={room.image}
                                alt={room.type}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'fallback_image_url'; }} // Optional fallback image
                            />
                            <CardContent>
                                <Typography variant="h6">{room.type}</Typography>
                                <Typography variant="body1">Price: ${room.price}</Typography>
                                <Typography variant="body2">Location: {room.location}</Typography>
                                <Typography variant="body2">{room.ac ? 'AC Room' : 'Non-AC Room'}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate(`/rooms/${room.id}`)} // Navigate to room details page
                                >
                                    View Details
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleBookRoom(room.id)} // Book the room
                                    style={{ marginLeft: '10px' }}
                                >
                                    Book Room
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Room;
