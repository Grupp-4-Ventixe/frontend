import React from "react";

const Evoucher = ({ tickets }) => {
  if (tickets.length === 0) {
    return <p className="text-center text-lg">No tickets found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Booking ID</th>
            <th className="text-left">Invoice ID</th>
            <th className="text-left">Seat Number</th>
            <th className="text-left">Gate</th>
            <th className="text-left">Category</th>
            <th className="text-left">Event ID</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.bookingId}</td>
              <td>{ticket.invoiceId}</td>
              <td>{ticket.seatNumber}</td>
              <td>{ticket.gate}</td>
              <td>{ticket.category}</td>
              <td>{ticket.eventId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Evoucher;