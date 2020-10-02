import React from 'react';
import {Container} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Loading() {
  return (
    <Container>
      <Icon name="spinner" size={28} color="#5ea8bf" />
    </Container>
  );
}
