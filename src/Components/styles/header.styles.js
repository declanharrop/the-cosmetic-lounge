import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: absolute;
  width: 100%;
  height: 100px;
  z-index: 100;
  padding: 0 20px;
  background: var(--cream);
  box-shadow: var(--bs-small);
  top: 0;
  left: 0;
  .desktop-nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
    .contact-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
  .mobile-nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      display: flex;
      flex-direction: column;
      width: 240px;
      li {
        cursor: pointer;
        padding: 16px 10px;
        border-bottom: 1px solid var(--green);
        border-top: 1px solid var(--green);
        margin-top: -1px;
        text-align: left;
        font-size: 2rem;
      }
      margin-bottom: 30px;
    }
    .contact-button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .menu-logo {
      left: auto;
      right: 10px;
    }
  }
  .drawer {
    position: absolute;
    z-index: 110;
    top: 0;
    left: 0;
    padding-top: 110px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100vh;
    background-color: white;
    box-shadow: var(--bs-small);
  }
  li {
    font-family: playfair-display, serif;
    list-style-type: none;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
    &:hover {
      color: var(--green);
      transform: scale(1.1);
    }
  }
  .menu-logo {
    padding: 15px 15px 15px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: calc(50% - 70px);
    .detail-logo {
    }
    img {
      width: 140px;
      height: 70px;
    }
  }
  .menuIcon {
    position: relative;
    z-index: 120;
    margin: 0px;
  }
`;

export default HeaderStyles;
