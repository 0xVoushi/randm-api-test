import styled from 'styled-components';
import media from '../media';

export const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.colors.black};
  ${media.tablet`
    padding: 3rem 4rem;
  `};
`;

export const Wrap = styled.section`
  margin: 0 auto;
  padding: 1.6rem 0.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  ${media.desktop`
    padding: 0 0.4rem;
    justify-content: flex-start;
  `};
`;
