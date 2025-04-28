import React from 'react';
import StatBox from '../../../components/AdminDashboard/StatBox';
import TicketSales from '../../../components/AdminDashboard/TicketSales';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-stats">
        <StatBox />
      </div>
      <div className="dashboard-sales">
        <TicketSales />
      </div>
    </div>
  );
};

export default AdminDashboard;