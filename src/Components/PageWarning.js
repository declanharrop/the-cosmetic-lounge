import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageContext } from '../Context/PageContext';

const WarningStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function PageWarning({ children }) {
  const { isOverage, setOverage } = useContext(PageContext);

  if (isOverage) {
    return <div>{children}</div>;
  }
  return (
    <WarningStyles>
      <div>
        <h1>Warning</h1>
        <h3>You Must be over 18 to enter this site</h3>
      </div>
    </WarningStyles>
  );
}
