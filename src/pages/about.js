import Link from 'next/link';
import ColorComponent from '../Components/ColorComponent';
import Hero from '../Components/Hero/Hero';
import Image from '../Components/Image/Image';
import Head from '../Elements/Head';
import Button from '../Elements/Button';

export default function About() {
  return (
    <div>
      <Head
        title="About Us - The Cosmetic Lounge Derby Aesthetics"
        description="The Cosmetic Lounge, the ultimate destination for aesthetic treatments in Derby. We firmly believe that true confidence begins with feeling comfortable and content in your own skin. Anti-wrinkle injections to smooth out fine lines and wrinkles, dermal fillers to restore volume and plumpness, chemical peels to rejuvenate your skin, or non-surgical facelifts to lift and tighten sagging skin."
        url="https://thecosmeticloungederby.co.uk/about"
      />
      <Hero height="60vh" src="img/headers/about.webp">
        <h1>About</h1>
      </Hero>
      <ColorComponent>
        <div className="content">
          <h3>the Cosmetic Lounge</h3>
          <p style={{ marginBottom: '30px' }}>
            Welcome to The Cosmetic Lounge, the ultimate destination for
            aesthetic treatments in Derby. We firmly believe that true
            confidence begins with feeling comfortable and content in your own
            skin. That's why, at The Cosmetic Lounge, we specialise in
            personalised facial enhancements that accentuate your individual
            beauty. Our team of highly trained professionals is committed to
            delivering outstanding care and customised treatment plans that are
            tailored to your unique needs.
          </p>
          <p>
            Whether you're looking for anti-wrinkle injections to smooth out
            fine lines and wrinkles, dermal fillers to restore volume and
            plumpness, chemical peels to rejuvenate your skin, or non-surgical
            facelifts to lift and tighten sagging skin, we offer a comprehensive
            range of services designed to address your specific concerns and
            help you achieve your desired results.
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
            Kelly is our Registered Nurse, and brings a wealth of experience
            from various Nursing sectors including private surgical, District
            nursing, and Rapid Response. After almost 20 years Kelly decided to
            take the leap and leave the NHS to focus on her passion in the world
            of Aesthetics.
          </p>
          <p>
            Kelly takes immense pride in her work and strives to enhance your
            natural beauty through our affordable non-surgical treatments. With
            extensive training at an advanced level, and 5 year’s experience in
            the industry Kelly possesses a vast knowledge base that enables her
            to provide safe and professional treatments, thorough consultations,
            and precise aftercare for all clients.
          </p>
        </div>
      </ColorComponent>
      <Image
        src="img/gallery/DSC-3641.webp"
        position="center"
        overlayColor="var(--green-50)"
        height="50vh"
      />
      <ColorComponent>
        <div className="content">
          <img
            className="headshot"
            src="img/team/ramona.webp"
            alt="Ramona headshot"
          />
          <h5 style={{ margin: '20px 0 30px' }}>Ramona</h5>
          <p>
            Hi, my name is Ramona Balusi, hairstylist for 13 years specialising
            in the art of hair colouring. I offer a personalised service in a
            lovely calm salon, for those that try to stay away from big
            busy/noisy salons.
          </p>
          <p>
            I love listening to my clients so that I can offer the best results
            and a sincere advice, my goal is to help you fall in love with your
            hair, teach you how to best manage it at home and keep it nice and
            healthy.
          </p>
          <p>
            I offer a fully bespoke colour service, cutting, hair treatments, a
            heavenly scalp massage and a beautiful bouncy blow-dry.
          </p>
          <p>
            For pricing please refer to my price list, for bespoke colour
            services a quote will be offered with the consultation.
          </p>
          <p>
            For extra long and thick hair charges will apply to compensate for
            extra time and products.
          </p>
          <p>
            A non refundable deposit of £35 is required to secure the booking,
            this will be deducted from the colour service.
          </p>
          <p style={{ marginBottom: '30px' }}>
            A patch test is required at least 48h before your appointment.
          </p>
          <Link href="/team/ramona">
            <Button>My Gallery</Button>
          </Link>
          <img
            style={{ marginTop: '120px' }}
            className="headshot"
            src="img/team/jada.webp"
            alt="Jada headshot"
          />
          <h5 style={{ margin: '20px 0 30px' }}>Jada</h5>
          <p>
            Hi! I’m Jada, the founder of The Face Code, located in Derby in a
            beautiful and luxurious salon.
          </p>
          <p>
            I specialise in Brow and Lip Tattooing and have a passion for
            enhancing natural beauty by providing a bespoke service for each of
            my clients and ensuring they leave the clinic feeling amazing.
          </p>
          <p>
            I pride myself on providing a professional and comfortable service,
            as well as constantly mastering new techniques so I can give my
            clients the best. Throughout my career I am proud to say I have
            trained with the best in the industry and will continue to develop
            my knowledge and skills as my business grows.
          </p>
          <p style={{ marginBottom: '30px' }}>
            I believe that success comes from hard work and dedication, and I am
            committed to giving my clients an exceptional service.
          </p>
          <Link href="/team/jada">
            <Button>My Gallery</Button>
          </Link>
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
