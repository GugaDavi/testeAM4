import React from 'react';
import { ScrollView } from 'react-native';

import { Container, Title } from './styles';

import Card from '../../components/Card';

export default function Store({ navigation }) {
  function seeMore() {
    navigation.navigate('CompleteInfos');
  }

  return (
    <ScrollView>
      <Title>Pupular</Title>
      <Container>
        <Card onPress={seeMore} />
        <Card onPress={seeMore} />
        <Card onPress={seeMore} />
        <Card onPress={seeMore} />
      </Container>
    </ScrollView>
  );
}
