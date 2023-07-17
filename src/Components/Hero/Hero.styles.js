import styled from 'styled-components';

const HeroStyles = styled.div`
  position: relative;
  max-height: 1500px;
  img {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    max-height: 1500px;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 1500px;
  }
  .buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export default HeroStyles;
