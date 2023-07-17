import styled from 'styled-components';

const ColorComponentStyles = styled.div`
  position: relative;
  z-index: 20;
  .color-strip {
    height: 6px;
    margin: 8px 0;
  }
  .color-container {
    .content {
      max-width: 1000px;
      margin: 0 auto;
      p {
        margin: 20px 0 0;
      }
    }
  }
`;

export default function ColorComponent({
  children,
  color = 'var(--green)',
  textColor = 'var(--cream)',
  margin = '-5vh 0 -5vh',
  padding = '10vh 10px',
}) {
  return (
    <ColorComponentStyles style={{ margin: `${margin}` }}>
      <div className="color-strip" style={{ backgroundColor: `${color}` }} />
      <div
        className="color-container"
        style={{
          backgroundColor: `${color}`,
          padding: `${padding}`,
          color: `${textColor}`,
        }}
      >
        {children}
      </div>
      <div className="color-strip" style={{ backgroundColor: `${color}` }} />
    </ColorComponentStyles>
  );
}
