import styled from 'styled-components';

const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 100;
  padding: 0 20px;
  background: var(--cream);
  box-shadow: var(--bs-small);
  top: 0;
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
        padding: 16px 10px;
        border-bottom: 1px solid var(--green);
        border-top: 1px solid var(--green);
        margin-top: -1px;
        text-align: left;
        font-size: 2rem;
      }
      margin-bottom: 30px;
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
  }
  .menu-logo {
    padding: 15px 15px 15px 0;
    display: flex;
    align-items: center;
    .detail-logo {
      height: 34px;
    }
    img {
      height: 50px;
    }
  }
  .menuIcon {
    position: relative;
    z-index: 120;
    margin: 15px;
  }
`;

export default HeaderStyles;
