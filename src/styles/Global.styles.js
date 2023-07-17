import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'amalfi-coast';
    src: url('/fonts/Amalfi-Coast.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    --cream: #F2EEEA;
    --cream-fade-s: #f2eeeaba;
    --cream-fade-m: #f2eeea7d;
    --cream-fade-l: #F2EEEA40;
    --cream-75: #F2EEEAbf;
    --cream-50: #F2EEEA7f;
    --cream-25: #F2EEEA3f;
    --green: #004542;
    --green-75: #004542bf;
    --green-50: #0045427f;
    --green-25: #0045423f;
    --black: #002A28;
    --brown: #5E4C21;
    --yellow: #f9cc77;
    /* Box Shadows */
    --bs-small: 0 2px 20px #00454240; 
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  *:focus {
    outline: none;
  }
  * {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  body {
    line-height: 1;
    margin: 0;
    padding: 0;
    font-family: ff-basic-gothic-pro, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    letter-spacing: 0.1rem;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    color: var(--black);
  }
  li {
    font-family: ff-basic-gothic-pro, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  #__next {
    position: relative;
  }
  button {
    font-family: ff-basic-gothic-pro, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    cursor: pointer;
  }
  a {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: var(--black);
    &:hover {
      color: var(--yellow);
    }
  }
  .large-btn {
    padding: 14px 28px;
    text-transform: uppercase;
    background: var(--green);
    color: var(--cream);
    border: none;
    border-radius: 40px;
    box-shadow: var(--bs-small);
  }
  
  .container {
    max-width: 1000px;
    margin: 50px auto;
    h1 {
      margin-bottom: 50px;
    }
    p {
      margin: 20px 0 0;
    }
  }
  @media screen and (max-width: 600px) {
    .large-btn {
      padding: 12px 16px;
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
    }
  }
  `;

export default GlobalStyle;
