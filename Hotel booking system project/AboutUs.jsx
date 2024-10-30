import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center" color='white'>
        About TownResort
      </Typography>
      
      <Typography variant="body1" paragraph align="center" color='white'>
        Welcome to TownResort, where luxury meets comfort. Nestled in the heart of the city, our hotel offers the perfect blend of modern amenities and a warm, inviting atmosphere. Whether you're visiting for business or leisure, we provide a tranquil oasis for relaxation and rejuvenation. With a variety of world-class services and facilities, including fine dining, spa treatments, and recreational activities, TownResort is designed to cater to all your needs. Our friendly staff is dedicated to ensuring your stay is seamless, comfortable, and memorable, offering personalized service to make you feel at home. Each room is equipped with state-of-the-art amenities, providing the perfect setting for a restful night. Explore the beauty of our surroundings and discover why TownResort is the ideal destination for travelers seeking a blend of luxury and comfort. We look forward to welcoming you and making your stay unforgettable.
      </Typography>
      
      <Typography variant="h5" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" paragraph>
        Founded in 2000, TownResort has been committed to providing an exceptional experience for all our guests. It started as a small boutique hotel, offering a few rooms with a promise of comfort and warmth. Over the years, we have expanded to become a premier destination for tourists, business travelers, and locals alike. Our growth has been driven by our passion for hospitality, our commitment to quality, and the continuous support of our loyal guests. Today, TownResort stands as a testament to our dedication, offering luxurious rooms, gourmet dining, and a variety of recreational activities. We pride ourselves on creating a unique, welcoming atmosphere where guests can unwind, explore, and create lasting memories. Our team is committed to continuous improvement, always striving to innovate and elevate our services to meet the ever-evolving needs of our guests. 
      </Typography>
      
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to offer the highest standards of hospitality, creating a relaxing and luxurious environment where guests can unwind and feel at home. We aim to exceed expectations in every way, from the comfort of our rooms to the quality of our dining experiences. At TownResort, we believe that true hospitality is about more than just providing a place to stay; it’s about creating an experience that is memorable, personal, and tailored to each guest’s unique needs. We are committed to sustainability and responsible tourism, ensuring that our operations are eco-friendly and contribute positively to the community. Our team is trained to provide attentive, personalized service, ensuring that every guest leaves with a smile. We invite you to experience the difference at TownResort, where every detail is crafted with care and every moment is designed to be cherished.
      </Typography>
      
      <Typography variant="h5" gutterBottom>
        What We Offer
      </Typography>
      
      {/* Services Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://www.essentialhome.eu/blog/wp-content/uploads/2023/09/110-1.jpg" // Replace with actual image URL
              alt="Luxurious Rooms"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Luxurious Rooms
              </Typography>
              <Typography variant="body2">
                Experience the comfort of our elegantly designed rooms with modern amenities and stunning views. Each room is a sanctuary of tranquility, offering plush bedding, high-speed internet, and state-of-the-art entertainment systems. Our rooms are designed to provide a serene escape from the hustle and bustle, with large windows that offer breathtaking views of the surrounding landscape. Whether you're staying for a night or an extended period, our rooms are your home away from home, complete with everything you need for a comfortable and relaxing stay.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/bc/12/f7/enjoy-the-luxurious-and.jpg?w=1200&h=-1&s=1" // Replace with actual image URL
              alt="Gourmet Dining"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Gourmet Dining
              </Typography>
              <Typography variant="body2">
                Savor exquisite cuisines at our in-house restaurant, offering a variety of local and international dishes. Our culinary team is dedicated to crafting dishes that delight the senses, using the freshest ingredients sourced from local farms and markets. Enjoy a casual breakfast, a refined lunch, or a romantic dinner, all set in an elegant dining room that blends sophistication with comfort. From classic favorites to modern creations, our menu caters to every palate, ensuring a dining experience that is both delightful and memorable. Join us for a culinary journey that celebrates flavor, creativity, and tradition.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://images.squarespace-cdn.com/content/v1/5c53611a0cf57d7ce300be61/d8b57f61-8ebc-440c-a79c-e23b9c51973d/Piovra%2B2.jpg" // Replace with actual image URL
              alt="Event Spaces"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Event Spaces
              </Typography>
              <Typography variant="body2">
                Host your events in our state-of-the-art banquet halls, perfect for weddings, conferences, and celebrations. Our versatile spaces can be customized to suit your needs, whether you're planning a grand wedding, a corporate meeting, or an intimate gathering. We offer a range of services to ensure your event runs smoothly, including catering, audio-visual equipment, and dedicated event planners who are there to assist you every step of the way. Our goal is to help you create an event that is not only successful but also memorable.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        For more information about our hotel, services, or to make a reservation, please visit our contact page or call us at (123) 456-7890. Our friendly staff is available 24/7 to assist with any inquiries you may have. We look forward to welcoming you to TownResort and making your stay an unforgettable experience.
      </Typography>
      <Typography variant="body1" paragraph align="center">
        <strong>Contact:</strong> +123 456 7890 | <strong>Email:</strong> info@townresort.com
      </Typography>

      <Button variant="contained" color="primary" onClick={() => navigate('/home')}>
        Back to Home
      </Button>
    </Container>
  );
};

export default AboutUs;
