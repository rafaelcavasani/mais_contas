import React from 'react';
import {Container, TextTitle} from './styles';
import PropTypes from 'prop-types';

export default function CustomAppbar({title}) {
  return (
    <Container>
      <TextTitle>{title}</TextTitle>
    </Container>
  );
}

CustomAppbar.propTypes = {
  title: PropTypes.string.isRequired,
};
