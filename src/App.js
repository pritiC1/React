import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './components/Login'; // Ensure the component name matches exactly
import Profile from './components/Profile'; // Ensure the component name matches exactly
import Register from './components/Register'; // Ensure the component name matches exactly

function App() {
  return (
    <Router>
      <Routes> {/* Change Switch to Routes */}
        <Route path="/login" element={<Login />} /> {/* Use element instead of component */}
        <Route path="/register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
