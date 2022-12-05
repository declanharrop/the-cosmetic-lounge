import HeroStyles from './Hero.styles';

export default function Hero({
  img = '/img/headers/home.jpg',
  imgalt,
  children,
  height = '60vh',
  objectPosition = 'center center',
  align = 'center',
}) {
  return (
    <HeroStyles style={{ height: `${height}` }}>
      <img
        src={img}
        alt={imgalt}
        style={{ objectPosition: `${objectPosition}` }}
      />
      {children && (
        <div className="overlay" style={{ justifyContent: `${align}` }}>
          {children}
        </div>
      )}
    </HeroStyles>
  );
}
