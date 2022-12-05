import React from 'react';
import ColorComponent from '../Components/ColorComponent';
import Hero from '../Components/Hero/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero>
        <h1 className="feature-font">The Cosmetic Lounge</h1>
      </Hero>
      <ColorComponent>
        <h3>Welcome to the Cosmetic Lounge</h3>
      </ColorComponent>
    </div>
  );
}
