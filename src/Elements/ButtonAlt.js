import styled from 'styled-components';

const ButtonAltStyles = styled.div`
  button {
    padding: 12px 30px;
    border: 2px solid var(--green);
    border-radius: 0;
    background: none;
    color: var(--green);
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.05);
      color: var(--cream);
      background: var(--green);
    }
  }
`;

export default function ButtonAlt({ children }) {
  return (
    <ButtonAltStyles>
      <button type="button">{children}</button>
    </ButtonAltStyles>
  );
}
