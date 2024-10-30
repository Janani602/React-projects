import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material'; // Removed Link import
import { useNavigate } from 'react-router-dom';

const Pages = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to TownResort
      </Typography>
      <Typography variant="h5" gutterBottom>
        Experience Comfort and Luxury
      </Typography>
      <Typography variant="body1" component="p">
        Nestled in the heart of the city, TownResort offers a unique blend of modern amenities and timeless elegance. 
        Whether you are here for business or leisure, our spacious rooms, world-class dining, and exceptional service 
        will ensure a memorable stay.
      </Typography>

      {/* Additional Section: Hotel Features */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Luxury Rooms</Typography>
            <Typography variant="body2">
              Enjoy the comfort of our elegantly designed rooms, equipped with plush bedding, modern amenities, and stunning views of the city skyline or serene gardens. 
              Each room is tastefully decorated to provide a warm and welcoming atmosphere, featuring high-speed WiFi, flat-screen TVs, and spacious en-suite bathrooms with premium toiletries.
              Whether you're relaxing after a day of sightseeing or catching up on work, our rooms offer the perfect sanctuary to unwind.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Gourmet Dining</Typography>
            <Typography variant="body2">
              Savor exquisite cuisines at our in-house restaurant, where culinary excellence meets a sophisticated ambiance. 
              Our talented chefs craft a diverse menu that features a delightful blend of local flavors and international favorites, 
              prepared with the freshest ingredients. Whether you’re in the mood for a hearty breakfast, a light lunch, or a fine dining experience, 
              our restaurant promises a memorable culinary journey. Guests can also enjoy a selection of fine wines, refreshing cocktails, and decadent desserts.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6">Event Spaces</Typography>
            <Typography variant="body2">
              Host your events in our state-of-the-art banquet halls, perfect for weddings, conferences, and celebrations. 
              Our versatile event spaces are designed to accommodate gatherings of all sizes, from intimate meetings to grand receptions. 
              Equipped with modern audio-visual technology, elegant decor, and personalized catering options, 
              our venues provide the perfect setting to make your event unforgettable. 
              Our dedicated events team is on hand to ensure every detail is taken care of, allowing you to focus on enjoying your special occasion.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Link Button */}
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: '20px' }}
        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiNw5PGh5OJAxUBg0sFHbQnHxUYABADGgJzZg&co=1&ase=2&gclid=Cj0KCQjwyL24BhCtARIsALo0fSBT8vxpEB6TF2enRheVoTCf06jOeQDJvs1ACaMSYM8RqI5qMuN-SeQaAqDxEALw_wcB&ohost=www.google.com&cid=CAESVuD280-veKehCeYquum2Uv85veUWDtOuJ76Tcz29q6J9rI_u-4ZDvADLK0LFrQ2kQJOOpuQoy5yiI2bMqWZJrujayjQYt3leApYeH9mZF-LekWZPStIC&sig=AOD64_1gEqJyUSrYDZl6jiziRYo-UZP5Zw&q&nis=4&adurl&ved=2ahUKEwiV8ovGh5OJAxXP-TgGHeNaGS4Q0Qx6BAgJEAM"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </Button>

      {/* Button to Navigate Back to Home */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/home')}
        style={{ marginTop: '20px', marginLeft: '10px' }}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default Pages;
