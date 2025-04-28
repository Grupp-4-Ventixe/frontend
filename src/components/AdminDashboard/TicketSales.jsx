import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './TicketSales.css';

const data = [
  { name: 'Sold Out', value: 1251 },
  { name: 'Fully Booked', value: 834 },
  { name: 'Available', value: 695 },
];

const COLORS = ['#F26CF9', '#2D3748', '#D0D0ED'];

const TicketSales = () => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="ticket-sales">
      <div className="header">
        <h3>Ticket Sales</h3>
        <button className="filter">This Week ▾</button>
      </div>

      <div className="chart-container">
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} cornerRadius={6} />
            ))}
          </Pie>
        </PieChart>
        <div className="center-text">
          <p>Total Ticket</p>
          <h2>{total.toLocaleString()}</h2>
        </div>
      </div>

      <div className="legend">
        {data.map((entry, index) => {
          const percentage = Math.round((entry.value / total) * 100);
          return (
            <div key={entry.name} className="legend-row">
              <div className="dot" style={{ backgroundColor: COLORS[index] }}></div>
              <div className="label-block">
                <span className="label">{entry.name}</span>
                <span className="value">{entry.value.toLocaleString()}</span>
              </div>
              <span className="percent">{percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketSales;
