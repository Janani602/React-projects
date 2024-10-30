import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';

// Sample blog data (replace with actual data from an API or database)
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Things to Do Around TownResort',
    date: 'October 10, 2024',
    description:
      'Explore the best attractions around our hotel. From serene parks to vibrant nightlife, here are the top things to do during your stay.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMLnWYNYX228eA-6_Bh7lBkyiIpPWPt-VCw&s',
    link: 'https://www.holidify.com/places/neemrana/sightseeing-and-things-to-do.html', // Replace with actual URL
  },
  {
    id: 2,
    title: 'Why Our Rooms Are Perfect for a Relaxing Getaway',
    date: 'September 30, 2024',
    description:
      'Our rooms are designed with comfort and luxury in mind. Learn more about the amenities and features that make our rooms the perfect retreat.',
    image: 'https://visitturkey.in/wp-content/uploads/2024/07/how-to-book-the-perfect-hotel-for-your-trip-1200x675.webp',
    link: 'https://yu.divami.com/blog/unique-resorts-in-tamil-nadu/', // Replace with actual URL
  },
  {
    id: 3,
    title: 'A Culinary Journey: Dining at TownResort',
    date: 'September 15, 2024',
    description:
      'Indulge in the finest dishes crafted by our expert chefs. Our restaurant offers a blend of local flavors and international cuisines.',
    image: 'https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/blog/2022-blog-content/5-culinary-experiences-to-add-to-your-bucket-list/5.png',
    link: 'https://www.clubmahindra.com/blog/food/10-foods-to-make-tamil-nadu-tourism-a-delicious-affair', // Replace with actual URL
  },
];

const Blog = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        TownResort Blog
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
        Stay updated with the latest news, tips, and events from TownResort
      </Typography>

      {/* Blog Posts */}
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="body1" paragraph>
                  {post.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => window.open(post.link, '_blank')}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
