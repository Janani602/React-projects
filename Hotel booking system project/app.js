import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Home from './Homepage';
import Login from './Login';
import Room from './Room';
import AboutUs from './AboutUs';
import Pages from './Pages';
import Blog from './Blog';
import RoomDetails from './RoomDetails';

import { AuthProvider } from './AuthContext';
import BookRoom from './BookRoom';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/rooms" element={<Room />} />
                    <Route path="/rooms/:id" element={<RoomDetails />} />
                    <Route path="/book-room/:roomId" element={<BookRoom />} /> {/* New route for booking a room */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/pages" element={<Pages />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
