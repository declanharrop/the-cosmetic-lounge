import HeroStyles from './Hero.styles';

export default function Hero({
  img = '/img/headers/home.webp',
  imgalt,
  children,
  height = '60vh',
  objectPosition = 'center center',
  align = 'center',
  overlayColor = 'var(--green-25)',
  textColor = 'var(--cream)',
}) {
  return (
    <HeroStyles style={{ height: `${height}` }}>
      <img
        src={img}
        alt={imgalt}
        style={{ objectPosition: `${objectPosition}` }}
      />
      {children && (
        <div
          className="overlay"
          style={{
            justifyContent: `${align}`,
            backgroundColor: `${overlayColor}`,
            color: `${textColor}`,
          }}
        >
          {children}
        </div>
      )}
    </HeroStyles>
  );
}
