import Head from 'next/head';
import HeroSlider from '../../Components/Hero/HeroSlider';

export default function JadaSlider() {
  return (
    <div>
      <Head
        title="Jada - The Cosmetic Lounge Derby Aesthetics"
        description=""
        url="https://thecosmeticloungederby.co.uk/team/jada"
      />
      <HeroSlider
        images={[
          '/jada/img1.jpeg',
          '/jada/img2.jpeg',
          '/jada/img3.jpeg',
          '/jada/img4.jpeg',
          '/jada/img5.jpeg',
          '/jada/img6.jpeg',
          '/jada/img7.jpeg',
          '/jada/img8.jpeg',
          '/jada/img9.jpeg',
        ]}
      />
    </div>
  );
}
