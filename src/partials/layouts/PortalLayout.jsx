import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const PortalLayout = () => {
  return (
    <div className="portal-layout">
      <Header title="Dashboard" />
      <Outlet />
    </div>
  );
};

export default PortalLayout;