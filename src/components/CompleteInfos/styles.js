import styled from 'styled-components/native';
import { darken } from 'polished';

import image from '../../assets/filme1.png';

export const Container = styled.View`
  padding: 20px;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 21px;
  line-height: 24px;
  font-weight: bold;
  margin: 10px 0px 20px;
  color: ${darken(0.17, '#f0cc56')};
`;
export const CardInfo = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;
export const CardImage = styled.Image.attrs({
  source: image,
})`
  background-color: #ececec;
  height: 200px;
  width: 130px;
  border-radius: 4px;
`;
export const Infos = styled.View`
  padding-left: 20px;
`;
export const GenericInfo = styled.Text`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  text-align: left;
  color: #222;
`;
export const NameInfo = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: #222;
`;
export const Stars = styled.View`
  flex-direction: row;
  margin: 20px 0px;
`;
export const Description = styled.View``;
export const TextDescription = styled.Text`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin: 20px 0px;
  color: #222;
`;
export const DownloadButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px;
  border: 3px solid ${darken(0.1, '#f0cc56')};
  border-radius: 30px;
  margin: 30px;
`;
export const TextButton = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  font-weight: bold;
  color: ${darken(0.1, '#f0cc56')};
`;

export const AddCart = styled.View``;
export const AddCartContainer = styled.View`
  align-self: stretch;
  padding: 40px 0px;
  background-color: #ececec;
  margin: 10px 0px;
`;
export const Price = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Value = styled.Text`
  text-align: center;
  font-size: 31px;
  font-weight: bold;
  color: #222;
`;

export const Pagament = styled.Text`
  text-align: center;
  color: #222;
`;
export const ButtonAddCart = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 10px 10px;
  background-color: ${darken(0.15, '#f0cc56')};
  border-radius: 30px;
  margin: 0px 50px;
  margin-top: -35px;
`;
export const TextButtonCart = styled.Text`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-weight: bold;
  color: #222;
`;
