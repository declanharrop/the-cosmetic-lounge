import styled from 'styled-components';

const HeroStyles = styled.div`
  position: relative;
  img {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    background-color: var(--cream-fade-s);
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default HeroStyles;
