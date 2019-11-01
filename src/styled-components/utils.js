import { css } from 'styled-components';

import media from './media';
import { sizes } from '../constants/enum';

export const checkObject = (props, type, themeKey, cssKey) => {
  const values = props[type];
  if (values instanceof Object) {
    const params = Object.keys(values).map(
      (size) =>
        media[sizes[size]]`
      ${cssKey}: ${props.theme[themeKey][values[size]]};
    `,
    );
    return params;
  }
  return css`
    ${cssKey}: ${props.theme[themeKey][values]};
  `;
};
