import styled from 'styled-components';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSliderStyles = styled.div`
  .slideshow {
    position: relative;
    min-height: 500px;
    max-height: 1500px;
    z-index: 10;
    .swiper-button-prev {
      color: var(--cream);
    }
    .swiper-button-next {
      color: var(--cream);
    }
  }
  .slide-image {
    position: relative;
    height: 100%;
    min-height: 500px;
    max-height: 1500px;
    overflow: hidden;
  }
  .overlay {
    min-height: 500px;
    max-height: 800px;
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .hero-content {
      padding: 120px 10px 10px;
      height: 100%;
      min-height: 500px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      display: flex;
      max-width: 1400px;
      text-align: left;
      margin: 0 auto;
      .standard-title {
        button {
          margin-top: 20px;
        }
        h1 {
          margin-top: -11px;
          max-width: 900px;
        }
        h5 {
          font-weight: 600;
          text-transform: none;
          max-width: 800px;
          letter-spacing: 0.1rem;
        }
        border-left: 3px solid white;
        padding-left: 20px;
      }
    }
  }
`;

export default function HeroSlider({
  images = [
    '/DSC-3536.webp',
    '/DSC-3558.webp',
    '/DSC-3623.webp',
    '/DSC-3625.webp',
    '/DSC-3641.webp',
  ],
  height = '100vh',
  children,
  overlayColor = 'var(--navy-50)',
  textColor = 'white',
  overlayPadding = '20px',
}) {
  return (
    <HeroSliderStyles>
      <div className="slideshow" style={{ height: `${height}` }}>
        <Swiper
          className="mySwiper"
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="slide-image" style={{ height: `${height}` }}>
                <Image
                  alt={`${image}`}
                  src={`/img/gallery${image}`}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: `center center`,
                  }}
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HeroSliderStyles>
  );
}
