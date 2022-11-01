import { createGlobalStyle } from 'styled-components';

// Bilo Font Weights
// 400 Light
// 500 Regular
// 600 Medium
// 700 Bold

const Typography = createGlobalStyle`

  h1 {
    font-weight: 500;
    letter-spacing: 0.05rem;
    font-size: 5.2rem;
    font-family: playfair-display, serif;
    line-height: 1.3;
  }
  .feature-font {
    font-family: amalfi-coast, serif;
    font-weight: 500;
    letter-spacing: 0.05rem;
    font-size: 5.2rem;
    line-height: 2.2;
  }
  h2 {
    letter-spacing: 0.2rem;
    font-size: 4rem;
    line-height: 1.2;
    font-family: playfair-display, serif;
    font-weight: 400;
    text-transform: uppercase;
  }
  h3 {
    letter-spacing: 0.4rem;
    font-size: 3.2rem;
    line-height: 1.2;
    font-family: playfair-display, serif;
    font-weight: 400;
    text-transform: uppercase;
  }
  h4 {
    letter-spacing: 0.1rem;
    font-size: 2.8rem;
    line-height: 1.4;
    font-weight: 300;
    /* text-transform: uppercase; */
  }
  h5 {
    font-family: amalfi-coast, serif;
    letter-spacing: 0.1rem;
    font-size: 2.6rem;
    line-height: 2;
    font-weight: 300;
    /* text-transform: uppercase; */
  }
  h6 {
    letter-spacing: 0.1rem;
    font-size: 2.2rem;
    line-height: 1.4;
    font-weight: 300;
    /* text-transform: uppercase; */
  }
  h7 {
    letter-spacing: 0.3rem;
    font-size: 2rem;
    line-height: 1.4;
    font-weight: 600;
    /* text-transform: uppercase; */
  }
  p {
    letter-spacing: 0.05rem;
    font-size: 1.7rem;
    line-height: 1.6;
    font-weight: 500;
  }
  ::placeholder {
    font-family: Amailfi-Coast, sans-serif;
    font-weight: 500;
  }
  input {
    font-family: Amailfi-Coast, sans-serif;
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 3.8rem;
    }
    .feature-font {
      font-size: 3rem;
    }
    h2 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.4rem;
    }
    h4 {
      font-size: 2.2rem;
    }
    h5 {
      font-size: 2rem;
    }
    h6 {
      font-size: 1.8rem;
    }
    h7 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export default Typography;
