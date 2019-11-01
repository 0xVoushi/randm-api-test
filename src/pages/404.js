import React from 'react';
import { navigate } from 'gatsby';

class NotFound extends React.Component {
  componentDidMount() {
    navigate('/');
  }

  render() {
    return null;
  }
}

export default NotFound;
