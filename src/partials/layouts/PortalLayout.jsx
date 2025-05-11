import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './PortalLayout.css'
import Navbar from '../../components/Navbar/Navbar'

const PortalLayout = () => {
  return (
    <div className="portal-layout">
      <aside className="sidebar">
        <Navbar />
      </aside>

      <div className="content-area">
        <Header title="Dashboard" />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;