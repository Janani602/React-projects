// Login.jsx
import React, { useState } from 'react';
import { Button, TextField, Checkbox, FormControlLabel, Typography, Container, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext for login
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth(); // Get the login function from AuthContext

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Login:', { email, password, rememberMe });

        // Use context's login function to authenticate the user
        login(email, password);
        navigate('/home'); // Navigate to Home page after login
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
    };

    return (
        <Container component="main" maxWidth="xs" className="login-container">
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h1">
                    <strong>Hotel Booking System</strong>
                </Typography>
            </Box>
            <Typography variant="h5" gutterBottom align="center">Login</Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
                    label="Remember Me"
                />
                <Button type="submit" fullWidth variant="contained" color="success" sx={{ mt: 2 }}>
                    Login
                </Button>
            </form>
            <Box sx={{ mt: 3 }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    fullWidth
                    onClick={() => handleSocialLogin('Facebook')}
                    sx={{ mb: 1 }} 
                >
                    Login with Facebook
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GoogleIcon />}
                    fullWidth
                    onClick={() => handleSocialLogin('Google')}
                >
                    Login with Google
                </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </Typography>
        </Container>
    );
};

export default Login;
