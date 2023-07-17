import Link from 'next/link';
import { SitemapStyles } from './Footer.styles';

export default function Sitemap() {
  return (
    <SitemapStyles>
      <h3>More Information</h3>
      <div className="sitemap-grid">
        <div className="section">
          <div className="title">
            <h5>Sitemap</h5>
          </div>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact Us</Link>
            <a
              href="https://www.google.com/search?q=the+cosmetic+lounge&oq=the+co&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyDQgCEC4YgwEYsQMYigUyCggDEC4YsQMYgAQyDQgEEC4YrwEYxwEYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyMDY3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4879f78c2eec87d1:0x5cc29e577f6001bf,1,,,,"
              target="_blank"
              rel="noreferrer"
            >
              Reviews
            </a>

            <Link href="/info/policy">Policy</Link>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>Opening Times</h5>
          </div>
          <div className="links">
            <p>MONDAY: 9am - 7pm</p>
            <p>TUESDAY: 9am - 5pm</p>
            <p>WEDNESDAY: 9am - 5pm</p>
            <p>THURSDAY: 9am - 5pm</p>
            <p>FRIDAY: 9am - 5pm</p>
            <p>SATURDAY: 9am - 5pm</p>
            <p>SUNDAY: CLOSED</p>
          </div>
        </div>
        <div className="section">
          <div className="title">
            <h5>Social</h5>
          </div>
          <div className="links">
            <a
              href="https://www.instagram.com/thecosmeticloungederby/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100084015080277"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </SitemapStyles>
  );
}
