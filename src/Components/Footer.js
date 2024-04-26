// Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Online Time Table Management System
      </Typography>
    </footer>
  );
};

export default Footer;
