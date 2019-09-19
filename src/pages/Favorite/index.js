import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, Title } from './styles';

export default function Favorite() {
  return (
    <Container>
      <Title>Favorites</Title>
    </Container>
  );
}

Favorite.navigationOptions = {
  tabBarLabel: 'Favoritos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="like2" size={20} color={tintColor} />
  ),
};
