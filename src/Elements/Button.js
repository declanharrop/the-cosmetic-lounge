import styled from 'styled-components';

const ButtonStyles = styled.div`
  button {
    padding: 12px 30px;
    border: 2px solid var(--cream);
    border-radius: 0;
    background: none;
    color: var(--cream);
    font-size: 1.8rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.05);
      color: var(--green);
      background: var(--cream);
    }
  }
`;

export default function Button({ children }) {
  return (
    <ButtonStyles>
      <button type="button">{children}</button>
    </ButtonStyles>
  );
}
