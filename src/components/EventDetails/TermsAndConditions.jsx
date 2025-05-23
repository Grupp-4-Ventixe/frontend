import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <section className="terms-box">
      <h2>Terms & Conditions</h2>
      <ol className="terms-list">
        <li>
          <strong>Ticket Purchase and Entry</strong>
          <ul>
            <li>All attendees must possess a valid ticket for entry.</li>
            <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
            <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
          </ul>
        </li>
        <li>
          <strong>Security and Safety</strong>
          <ul>
            <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
            <li>Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
            <li>The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
          </ul>
        </li>
        <li>
          <strong>Code of Conduct</strong>
          <ul>
            <li>Attendees are expected to behave responsibly and respectfully toward others.</li>
            <li>Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund.</li>
          </ul>
        </li>
        <li>
          <strong>Event Schedule and Changes</strong>
          <ul>
            <li>The event schedule is subject to change without prior notice.</li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default TermsAndConditions;