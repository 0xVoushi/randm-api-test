import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Planet = styled.div`
  margin: 0 0 2rem;
  padding: 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f3136;
  border: 0.2rem solid #42454a;
  border-radius: 0.8rem;
`;

export const PlanetTitle = styled.h2`
  margin: 0 0 3rem;
  font-weight: normal;
  font-size: 2.4rem;
  color: #9a9a9a;
  strong {
    margin: 0 0 0 1rem;
    color: #fff;
  }
`;

export const Residents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Resident = styled.div`
  margin: 0 1rem 2rem;
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid #fff;
  border-radius: 0.6rem;
`;

export const ResidentImg = styled.img`
  margin: 0 0 1rem;
  width: 30rem;
  height: 30rem;
  border-radius: 0.6rem 0.6rem 0 0;
  ${(props) =>
    props.dead === "Dead" &&
    css`
      filter: invert(75%);
    `}
`;

export const ResidentInfo = styled.div`
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResidentInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResidentInfoField = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
  color: #9a9a9a;
  text-transform: uppercase;
`;

export const ResidentInfoValue = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
`;

export const AlertText = styled.p`
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
  color: red;
`;
