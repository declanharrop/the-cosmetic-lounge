import Head from 'next/head';
import HeroSlider from '../../Components/Hero/HeroSlider';

export default function RamonaSlider() {
  return (
    <div>
      <Head
        title="Ramona - The Cosmetic Lounge Derby Aesthetics"
        description=""
        url="https://thecosmeticloungederby.co.uk/team/ramona"
      />
      <HeroSlider
        images={[
          '/ramona/image0.jpeg',
          '/ramona/image1.jpeg',
          '/ramona/image2.jpeg',
          '/ramona/image3.jpeg',
          '/ramona/image4.jpeg',
          '/ramona/image5.jpeg',
          '/ramona/image6.jpeg',
        ]}
      />
    </div>
  );
}
