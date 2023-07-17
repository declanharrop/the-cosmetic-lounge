import React from 'react';
import Link from 'next/link';
import ColorComponent from '../Components/ColorComponent';
import Hero from '../Components/Hero/Hero';
import Button from '../Elements/Button';

export default function HomePage() {
  return (
    <div>
      <Hero height="90vh">
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
        <h3>Welcome to the Cosmetic Lounge</h3>
      </ColorComponent>
    </div>
  );
}
