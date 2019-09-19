import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Inicio',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};
