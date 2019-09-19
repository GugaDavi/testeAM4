import React from 'react';
import { ScrollView, Text } from 'react-native';
import { darken } from 'polished';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Title,
  CardInfo,
  CardImage,
  Infos,
  GenericInfo,
  NameInfo,
  Stars,
  Description,
  TextDescription,
  DownloadButton,
  TextButton,
  AddCart,
  AddCartContainer,
  Price,
  Value,
  Pagament,
  ButtonAddCart,
  TextButtonCart,
} from './styles';

export default function CompleteInfos() {
  return (
    <ScrollView>
      <Container>
        <Title>Titulo do Filme</Title>
        <CardInfo>
          <CardImage />
          <Infos>
            <GenericInfo>Titulo Original</GenericInfo>
            <NameInfo>Titulo do Filme</NameInfo>
            <GenericInfo>Genero</GenericInfo>
            <NameInfo>INFANTO JUVENIL</NameInfo>
            <GenericInfo>Autor</GenericInfo>
            <NameInfo>J.K ROWLING</NameInfo>
            <GenericInfo>Origem</GenericInfo>
            <NameInfo>INGLATERRA</NameInfo>
            <Stars>
              <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
              <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
              <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
              <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
              <Icon name="star" size={20} color={darken(0.1, '#f0cc56')} />
            </Stars>
          </Infos>
        </CardInfo>
        <Description>
          <GenericInfo>Descrição</GenericInfo>
          <TextDescription>
            Mussum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex
            eros. Vivamus sit amet nibh non tellus tristique interdum. Si u
            mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Em pé
            sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Paisis,
            filhis, espiritis santis. Nullam volutpat risus nec leo commodo, ut
            interdum diam laoreet. Sed non consequat odio. Viva Forevis aptent
            taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis
            num é.Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é
            disculpa de bebadis, arcu quam euismod magna. Sapien in monti
            palavris qui num significa nadis i pareci latim. Paisis, filhis,
            espiritis santis. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </TextDescription>
          <GenericInfo>Previa</GenericInfo>
          <TextDescription>
            Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
            de bebadis, arcu quam euismod magna.
          </TextDescription>
        </Description>
        <DownloadButton>
          <Icon
            name="cloud-download"
            size={20}
            color="#F0CC56"
            style={{ marginRight: 5 }}
          />
          <TextButton>DOWNLOAD PRÉVIA</TextButton>
        </DownloadButton>
        <AddCart>
          <GenericInfo>E-book Kindle</GenericInfo>
          <AddCartContainer>
            <Price>
              <Text style={{ fontWeight: 'bold', marginRight: 10 }}>R$</Text>
              <Value>25,90</Value>
            </Price>
            <Pagament>COMPRA NO DÉBITO</Pagament>
          </AddCartContainer>
          <ButtonAddCart>
            <Icon name="shopping-cart" size={20} style={{ marginRight: 5 }} />
            <TextButtonCart>COMPRAR AGORA</TextButtonCart>
          </ButtonAddCart>
        </AddCart>
      </Container>
    </ScrollView>
  );
}

CompleteInfos.navigationOptions = {
  title: 'Loja',
  headerTransparent: false,
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
