import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { darken } from 'polished';

import {
  Container,
  CardImage,
  Infos,
  Title,
  Segment,
  Age,
  Stars,
  DownloadButton,
  TextButton,
} from './styles';

export default function Card({ onPress }) {
  return (
    <Container>
      <CardImage />
      <Infos>
        <Title>Titulo do Filme</Title>
        <Segment>INFANTO JUVENIL</Segment>
        <Age>12 ANOS</Age>
        <Stars>
          <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
          <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
          <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
          <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
          <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
        </Stars>
        <DownloadButton onPress={onPress}>
          <Icon
            name="cloud-download"
            size={20}
            color="#F0CC56"
            style={{ marginRight: 5 }}
          />
          <TextButton>DOWNLOAD PRÉVIA</TextButton>
        </DownloadButton>
      </Infos>
    </Container>
  );
}
