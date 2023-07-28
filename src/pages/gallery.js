import HeroSlider from '../Components/Hero/HeroSlider';
import Head from '../Elements/Head';

export default function Gallery() {
  return (
    <div>
      <Head
        title="Gallery - The Cosmetic Lounge Derby Aesthetics"
        description="The Cosmetic Lounge, Check out the gallery to see some of our work and the results we have achieved for our clients. We pride ourselves on natural-looking results and a high level of customer service."
        url="https://thecosmeticloungederby.co.uk/gallery"
      />
      <HeroSlider />
    </div>
  );
}
