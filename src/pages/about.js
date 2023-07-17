import Link from 'next/link';
import ColorComponent from '../Components/ColorComponent';
import Hero from '../Components/Hero/Hero';
import Button from '../Elements/Button';
import Image from '../Components/Image/Image';

export default function About() {
  return (
    <div>
      <Hero height="60vh" src="img/headers/about.webp">
        <h1>About</h1>
      </Hero>
      <ColorComponent>
        <div className="content">
          <h3>the Cosmetic Lounge</h3>
          <p style={{ marginBottom: '30px' }}>
            Welcome to The Cosmetic Lounge, the ultimate destination for facial
            aesthetic treatments in Derby. We firmly believe that true
            confidence begins with feeling comfortable and content in your own
            skin. That's why, at The Cosmetic Lounge, we specialise in
            personalised facial enhancements that accentuate your individual
            beauty. Our team of highly trained professionals is committed to
            delivering outstanding care and customised treatment plans that are
            tailored to your unique needs.
          </p>
          <p>
            Whether you're looking for Botox injections to smooth out fine lines
            and wrinkles, dermal fillers to restore volume and plumpness,
            chemical peels to rejuvenate your skin, or non-surgical facelifts to
            lift and tighten sagging skin, we offer a comprehensive range of
            services designed to address your specific concerns and help you
            achieve your desired results.
          </p>
          <p>
            At The Cosmetic Lounge, we understand that every person is
            different, and we take the time to listen to your goals and
            expectations. Our experienced practitioners will work closely with
            you to create a treatment plan that aligns with your preferences and
            ensures natural-looking results. We prioritise your comfort and
            safety throughout the entire process, using only the highest quality
            products and state-of-the-art techniques.
          </p>
        </div>
      </ColorComponent>
      <Image
        src="img/team/both.webp"
        position="center"
        overlayColor="var(--green-50)"
        height="50vh"
      />
      <ColorComponent>
        <div className="content">
          <h3>Our Team</h3>
          <img
            className="headshot"
            src="img/team/rochelle.webp"
            alt="Rochelle headshot"
          />
          <h5 style={{ margin: '20px 0 30px' }}>Rochelle</h5>
          <p>
            Rochelle is a qualified Phlebotomist, she has worked in healthcare
            for the last 8 years. Rochelle qualified in aesthetics almost 5
            years ago and is an Advanced Aesthetics Practitioner. She is a
            complications expert who has assisted multiple practitioners
            throughout Derby with complications and emergencies.
          </p>
          <p>
            Rochelle has been highly trained in Dermal Fillers, Anti Ageing
            treatments and Collagen restoring treatments. Her favourite
            treatment to carry out is a ‘non surgical rhinoplasty’ as it leaves
            clients feeling unbelievably confident.
          </p>
          <img
            className="headshot"
            src="img/team/kelly.webp"
            alt="Rochelle headshot"
          />
          <h5 style={{ margin: '20px 0 30px' }}>Kelly</h5>
          <p>
            Kelly, a Registered Nurse, brings a wealth of experience in Medical
            Nursing from various sectors including private surgical, District
            nursing, and Rapid Response. While managing her aesthetic clinics,
            Kelly also continues to serve as a rapid response nurse within the
            NHS. Kelly takes immense pride in her work and strives to enhance
            your natural beauty through our affordable non-surgical treatments.
            With extensive training at an advanced level, Kelly possesses a vast
            knowledge base that enables her to provide safe and professional
            treatments, thorough consultations, and precise aftercare for all
            clients.
          </p>
        </div>
      </ColorComponent>
      <Image
        src="img/gallery/DSC-3641.webp"
        position="center"
        overlayColor="var(--green-50)"
        height="50vh"
      />
      <ColorComponent margin="-24px 0 30px">
        <div className="content">
          <h3>Your Visit</h3>
          <p style={{ marginBottom: '30px' }}>
            When you visit The Cosmetic Lounge, you can expect a warm and
            welcoming environment where you can relax and unwind. Our clinic is
            equipped with modern facilities and cutting-edge technology to
            provide you with the best possible experience. We strive to make
            your journey with us as seamless and enjoyable as possible, from the
            moment you step through our doors until long after your treatment is
            complete.
          </p>
          <p>
            So why wait? Discover The Cosmetic Lounge today and embark on a
            transformative journey towards a more confident and radiant version
            of yourself. Book your consultation now and let our expert team
            guide you towards achieving your aesthetic goals. Your dream look is
            just a phone call away!
          </p>
        </div>
      </ColorComponent>
    </div>
  );
}
