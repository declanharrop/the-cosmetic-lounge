import styled from 'styled-components';

const TreatmentPageStyles = styled.div`
  .content {
    margin: 8vh 0;
    h2 {
      color: var(--green);
    }
    .section {
      max-width: 1200px;
      margin: 7vh auto;
      padding: 0 20px;
      p {
        margin: 18px 0;
      }
      .treatmentCosts {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 20px;
        .cost {
          font-weight: 600;
          font-size: 3rem;
          margin: 3px;
        }
        .details {
          font-size: 1.4rem;
        }
        .name {
          margin: 3px;
        }
      }
      .exampleImages {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 30px 20px;
        img {
          width: 100%;
          height: 360px;
          object-fit: cover;
        }
      }
    }
    .styledlist {
      list-style-type: disc;
      list-style: inside;
      margin: 20px 0 0;
      li {
        margin-top: 8px;
        line-height: 1.4;
      }
    }
  }
`;

export default TreatmentPageStyles;
