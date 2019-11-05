import styled from 'styled-components';
import media from '../../styled-components/media';

export const Wrap = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  max-width: 100%;
  ${media.tablet`
    padding: 2rem 0;
  `};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.colors.white};
  ${media.tablet`
    padding: 0.5rem 1.6rem;
  `};
  ${media.giant`
    max-width: 128rem;
  `};
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
`;
