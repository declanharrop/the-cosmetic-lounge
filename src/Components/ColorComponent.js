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
      .headshot {
        height: 240px;
        width: 240px;
        margin: 50px 0 0;
        border-radius: 50%;
        border: 4px solid var(--cream);
        box-shadow: 0 0 20px var(--cream-50);
      }
      h5 {
        font-size: 3rem;
      }
    }
  }
`;

export default function ColorComponent({
  children,
  color = 'var(--green)',
  textColor = 'var(--cream)',
  margin = '-24px 0 -24px',
  padding = '100px 10px',
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
