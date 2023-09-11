import Head from 'next/head';
import styled from 'styled-components';
import ButtonAlt from '../Elements/ButtonAlt';

const BookWarningStyles = styled.div`
  h1 {
    padding-top: 50px;
  }
  h3 {
    margin: 20px 0 80px;
  }
  .button {
    margin: 0 0 160px;
  }
`;

export default function BookWarning() {
  return (
    <>
      <Head>
        <title>You MUST be over 18 years of age to continue</title>
      </Head>
      <BookWarningStyles>
        <h1>WARNING!</h1>
        <h3>You must be over 18 years of age to continue</h3>
        <div className="button">
          <a
            href="https://thecosmeticlounge.book.app/book-now"
            className="book-click"
          >
            <ButtonAlt>I confirm I am over 18</ButtonAlt>
          </a>
        </div>
      </BookWarningStyles>
    </>
  );
}
