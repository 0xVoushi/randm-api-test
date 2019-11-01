import { css } from 'styled-components';
import theme from './theme';

/* EXAMPLE

${media.phone||tablet||desktop||giant`
  padding: 0;
`}

*/

export default Object.keys(theme.size).reduce((accumulator, label) => {
  // eslint-disable-next-line
  accumulator[label] = (...args) => css`
    @media (min-width: ${theme.size[label]}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
