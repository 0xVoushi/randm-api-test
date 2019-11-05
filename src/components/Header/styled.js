import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrap = styled.div`
  margin: 0 auto;
  padding: 2rem 1.6rem 1rem;
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    padding: 4rem 3.2rem 1rem;
  `};
`;
