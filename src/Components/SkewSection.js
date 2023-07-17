import React from 'react';
import styled from 'styled-components';

const SkewSectionStyles = styled.section`
  background: var(--cream);
  position: relative;
  transform: skewY(-3deg);
  padding: 15vh 20px;
  .inner {
    transform: skewY(3deg);
  }

  @media (max-width: 700px) {
    transform: skewY(0deg);
    .inner {
      transform: skewY(0deg);
    }
  }
`;

export default function SkewSection({
  margin = '-10vh 0 0 0',
  padding = '15vh 20px',
  children,
}) {
  return (
    <SkewSectionStyles style={{ margin: `${margin}`, padding: `${padding}` }}>
      <div className="inner">{children}</div>
    </SkewSectionStyles>
  );
}
