import React from 'react';
import { ContactStyles } from './Footer.styles';

export default function Contact() {
  return (
    <ContactStyles>
      <div className="contact-grid">
        <div className="address">
          <h3>The Cosmetic Lounge</h3>
          <p>20, Highfield Rd</p>
          <p>Littleover</p>
          <p>Derby</p>
          <p>DE23 1DG</p>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <div className="contact-section">
            <p className="title">Phone:</p>
            <a href="tel:+447496091149" className="call-click">
              <p>07496 091 149</p>
            </a>
          </div>
          <div className="contact-section">
            <p className="title">Book</p>
            <a
              href="https://thecosmeticlounge.book.app/book-now"
              className="book-click"
            >
              <p>Book now</p>
            </a>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}
