import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

export default function Download() {
  return (
    <Container>
      <Title>Downloads</Title>
    </Container>
  );
}

Download.navigationOptions = {
  tabBarLabel: 'Downloads',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="cloud-download" size={20} color={tintColor} />
  ),
};
