import React from 'react';
import Link from 'next/link';
import ColorComponent from '../Components/ColorComponent';
import Hero from '../Components/Hero/Hero';
import Button from '../Elements/Button';
import Image from '../Components/Image/Image';

export default function HomePage() {
  return (
    <div>
      <Hero height="90vh" overlayColor="var(--green-25)">
        <div className="content">
          <h1 className="feature-font">The Cosmetic Lounge</h1>
          <div className="buttons">
            <a href="https://thecosmeticlounge.book.app/book-now">
              <Button>Book</Button>
            </a>
            <Link href="/About">
              <Button>About</Button>
            </Link>
            <Link href="/gallery">
              <Button>Gallery</Button>
            </Link>
          </div>
        </div>
      </Hero>
      <ColorComponent>
        <div className="content">
          <h3>Welcome to the Cosmetic Lounge</h3>
          <p style={{ marginBottom: '30px' }}>
            Welcome to The Cosmetic Lounge, your premier destination for
            exceptional facial aesthetic treatments in Derby. We believe that
            true beauty lies in enhancing and embracing your unique features.
            Our dedicated team of skilled professionals is passionate about
            helping you achieve your desired look while ensuring your comfort
            and satisfaction.
          </p>
          <Link href="/About">
            <Button>About Us</Button>
          </Link>
        </div>
      </ColorComponent>
      <Image
        src="img/headers/contact.webp"
        position="center bottom"
        overlayColor="var(--green-50)"
        height="70vh"
      >
        <div className="content">
          <h3>A wide range of treatments</h3>
          <p style={{ marginBottom: '30px' }}>
            With a focus on personalized care and the latest advancements in the
            field, we offer a range of services including Botox injections,
            dermal fillers, chemical peels, microdermabrasion, non-surgical
            facelifts, and rejuvenation treatments. At The Cosmetic Lounge, we
            combine expertise, attention to detail, and a warm, inviting
            atmosphere to provide you with outstanding results that leave you
            feeling confident and refreshed.
          </p>
          <a href="https://thecosmeticlounge.book.app/book-now">
            <Button>More</Button>
          </a>
        </div>
      </Image>
    </div>
  );
}
