import styled from 'styled-components';

const ImageStyles = styled.div`
  position: relative;
  max-height: 1000px;
  height: 60vh;
  img {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 1000px;
    object-fit: cover;
  }
  .overlay {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    .overlay-container {
      .content {
        max-width: 1000px;
        margin: 0 auto;
        p {
          margin: 20px 0 0;
        }
      }
    }
  }
`;

export default function Image({
  children,
  overlayColor = 'var(--green-25)',
  position = 'center center',
  height = '60vh',
  color = 'var(--cream)',
  src = 'img/headers/home.webp',
}) {
  return (
    <ImageStyles style={{ height: `${height}` }}>
      <img
        src={src}
        alt="the cosmetic lounge"
        style={{ objectPosition: `${position}` }}
      />
      {children && (
        <div
          className="overlay"
          style={{ color: `${color}`, backgroundColor: `${overlayColor}` }}
        >
          <div className="overlay-container">{children}</div>
        </div>
      )}
    </ImageStyles>
  );
}
