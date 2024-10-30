// Signup.jsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext for signup
import './signup.css'; 

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { signup } = useAuth(); // Get the signup function from AuthContext

    const handleSignup = (event) => {
        event.preventDefault();

        // Simple validation
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match!");
            return;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long!');
            return;
        }

        // Use context's signup function to register the user
        signup(name, email, password);
        navigate('/home'); // Redirect to home page after successful signup
    };

    const handleSocialSignup = (provider) => {
        console.log(`Signup with ${provider}`);
    };

    return (
        <Container component="main" maxWidth="xs" className="signup-container">
            <Box className="signup-box">
                <Typography className="signup-title">Create Your Account</Typography>
                <Typography variant="h5" gutterBottom>Signup</Typography>
                {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                <form onSubmit={handleSignup}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" className="signup-button">
                        Signup
                    </Button>
                </form>
                <Box sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        startIcon={<FacebookIcon />}
                        fullWidth
                        onClick={() => handleSocialSignup('Facebook')}
                        className="social-button facebook"
                    >
                        Signup with Facebook
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<GoogleIcon />}
                        fullWidth
                        onClick={() => handleSocialSignup('Google')}
                        className="social-button google"
                        sx={{ mt: 1 }}
                    >
                        Signup with Google
                    </Button>
                </Box>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account? <Link href="/login">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Signup;
