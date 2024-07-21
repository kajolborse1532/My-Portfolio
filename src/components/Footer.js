import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#090A0B', padding: '20px', textAlign: 'center',color: 'white' }}>
      <p><b>&copy; {new Date().getFullYear()} <i>Kajol Borse . All Rights Reserved.</i></b></p>
    </footer>
  );
};

export default Footer;