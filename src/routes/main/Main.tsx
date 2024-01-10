import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/navigation/navbar/Navbar';
import Footer from 'components/navigation/footer/Footer';

import './main.css';

const Main: React.FC = () => (
  <body>
    <Navbar />
    <div className="content">
        <Outlet />
    </div>
    <Footer />
  </body>
);

export default Main;
