import React from 'react';
import { FooterStyles } from './Footer.styles';
import Contact from './Contact';
import Sitemap from './Sitemap';
import ButtonAlt from '../../Elements/ButtonAlt';

export default function Footer() {
  return (
    <FooterStyles>
      <div className="logo" style={{ marginBottom: '40px' }}>
        <img src="/img/Logo.svg" alt="Footer" />
      </div>
      <a
        href="https://www.google.com/search?q=the+cosmetic+lounge&oq=the+co&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyDQgCEC4YgwEYsQMYigUyCggDEC4YsQMYgAQyDQgEEC4YrwEYxwEYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMDY3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4879f78c2eec87d1:0x5cc29e577f6001bf,1,,,,"
        target="_blank"
        rel="noreferrer"
      >
        <ButtonAlt>Reviews</ButtonAlt>
      </a>
      <Contact />
      <Sitemap />
      <div className="lower">
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} THE COSMETIC LOUNGE. Use of this site
            constitutes acceptance of our Privacy Policy. The material on this
            site may not be reproduced, distributed, transmitted, cached or
            otherwise used, except with prior written permission of THE COSMETIC
            LOUNGE.
          </p>
          <div className="dhweblogo">
            <a href="https://dhweb.dev" target="_blank" rel="noreferrer">
              <img src="/logo/dhwebdev.svg" alt="DH Web Logo" />
            </a>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}
