import React from 'react';

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <React.Fragment>{element}</React.Fragment>;
  return ConnectedRootElement;
};
