import React from 'react';
import Link from 'next/link';
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
            <a href="tel:+447752614616" className="call-click">
              <p>07752 614616</p>
            </a>
          </div>
          <div className="contact-section">
            <p className="title">Book</p>
            <Link href="/book-warning">
              <p>Book now</p>
            </Link>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}
