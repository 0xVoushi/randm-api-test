
import React from "react";
import { Link } from 'gatsby';

import Logo from "../Logo";
import { Wrap } from './styled';

const Header = () => (
  <Wrap>
    <Link to="/" aria-label="Go to Main page" title="Go to Main page">
      <Logo width="auto" height="auto" />
    </Link>
  </Wrap>
)
export default Header;
