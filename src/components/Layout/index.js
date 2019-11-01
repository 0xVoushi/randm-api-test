import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styled-components/global';

import theme from '../../styled-components/theme';

import { Wrap, Wrapper, Container, Main } from './styled';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              themeColor
              ogType
              ogSiteName
              ogLocale
            }
          }
        }
      `}
      render={(data) => (
        <Wrap>
          <Helmet
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              { name: 'theme-color', content: data.site.siteMetadata.themeColor },
              { name: 'og:type', content: data.site.siteMetadata.ogType },
              { name: 'og:site_name', content: data.site.siteMetadata.ogSiteName },
              { name: 'og:locale', content: data.site.siteMetadata.ogLocale }
            ]}
          >
            <html lang="ru" />
          </Helmet>

          <GlobalStyle />

          <Wrapper>
            <Container>
              <Main role="main">
                {children}
              </Main>
            </Container>
          </Wrapper>
        </Wrap>
      )}
    />
  </ThemeProvider>
);
