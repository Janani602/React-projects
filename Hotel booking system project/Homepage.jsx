import React, { useState } from 'react';
import './home.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HotelIcon from '@mui/icons-material/Hotel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false); // Manage search bar visibility
  const [searchQuery, setSearchQuery] = useState(''); // Manage search query
  const [searchResults, setSearchResults] = useState([]); // Manage search results

  // Example room data with images
  const rooms = [
    { 
      id: 1, 
      name: 'Deluxe Room', 
      description: 'Luxurious and spacious room with a great view.', 
      image: 'https://www.thewoodinnshimla.com/rooms/dlx-1.jpg' // Replace with actual image URL
    },
    { 
      id: 2, 
      name: 'Executive Suite', 
      description: 'Perfect for business travelers.', 
      image: 'https://www.explore-oban.com/wp-content/uploads/2017/01/IMG_1795-e1488490453896.jpg' 
    },
    { 
      id: 3, 
      name: 'Presidential Suite', 
      description: 'The epitome of luxury and comfort.', 
      image: 'https://t4.ftcdn.net/jpg/05/83/48/29/360_F_583482975_5Ym2LLXGF06g1SQ51SVYpYZ0SoOzzGlJ.jpg' 
    },
  ];

  const handleSearch = () => {
    // Filter rooms based on the search query
    const results = rooms.filter(room => 
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results); // Update search results
  };

  return (
    <div>
      {/* Top bar with contact info and social media icons */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 1 }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="body2" sx={{ color: '#000000' }}>
                Contact: +123 456 7890 | Email: info@townresort.com
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <IconButton color="primary" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" href="https://google.com" target="_blank" rel="noopener noreferrer">
                <GoogleIcon />
              </IconButton>
              <IconButton color="primary" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main AppBar */}
      <AppBar position="static" color="default" elevation={2}>
        <Toolbar>
          <HotelIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#000000' }}>
            TownResort Hotel {/* Resort Name in AppBar */}
          </Typography>
          <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/home')}>Home</Button>
          <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/rooms')}>Rooms</Button>
          <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/pages')}>Pages</Button>
          <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/blog')}>Blog</Button>
          <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/about')}>About Us</Button>
          <IconButton
            color="inherit"
            sx={{ mx: 1 }}
            onClick={() => setShowSearchBar(prev => !prev)} // Toggle search bar visibility
          >
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            sx={{ ml: 2 }}
            onClick={() => navigate('/login')}
          >
            BOOK NOW
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box className="hero-section" sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#000000' }}>
          Welcome to TownResort Hotel
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ color: '#000000' }}>
          Experience luxury and comfort like never before.
        </Typography>

        {/* Signup and Login buttons in Hero Section */}
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => navigate('/signup')}
          sx={{ mt: 2 }}
        >
          Signup
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => navigate('/login')}
          sx={{ mt: 2, ml: 2 }}
        >
          Login
        </Button>
      </Box>

      {/* Minimized Search Bar */}
{/* Minimized Search Bar using slotProps.input */}
{showSearchBar && (
  <Box sx={{ p: 1, backgroundColor: '#f5f5f5', maxWidth: '400px', margin: 'auto' }}>
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search rooms..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter
      slotProps={{
        input: {
          sx: {
            fontSize: '0.875rem', // Reduce font size
            padding: '4px 8px',  // Reduce padding
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  </Box>
)}



      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <Container sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Search Results:
          </Typography>
          <Grid container spacing={2}>
            {searchResults.map(room => (
              <Grid item xs={12} sm={6} md={4} key={room.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={room.image} // Display room image
                    alt={room.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{room.name}</Typography>
                    <Typography variant="body1">{room.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      {/* Resort Details Section */}
      <Container sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: '#000000' }}>
          About Our Resort
        </Typography>
        <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
          Nestled in the breathtaking landscapes of Kashmir, TownResort Hotel is your ideal getaway.
          Enjoy serene views, luxurious accommodations, and exceptional service that makes your stay unforgettable.
        </Typography>
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#000000' }}>
          Location: India
        </Typography>
        <Typography variant="h5" gutterBottom align="center" sx={{ color: '#000000' }}>
          Amenities:
        </Typography>
        <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
          - Stays <br />
          - Flights <br />
          - Flight + Hotel Packages <br />
          - Car Rentals <br />
          - Local Attractions <br />
          - Airport Taxis
        </Typography>
        <Typography variant="body1" component="p" gutterBottom align="center" sx={{ color: '#000000' }}>
          Explore the beauty of Kashmir with our top-notch services and amenities designed for your comfort and convenience.
        </Typography>

        {/* View Rooms Button */}
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/rooms')}
          >
            View Rooms
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
