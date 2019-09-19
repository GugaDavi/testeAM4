import styled from 'styled-components/native';
import { darken } from 'polished';

import image from '../../assets/filme1.png';

export const Container = styled.View`
  height: 200px;
  align-self: stretch;
  background-color: #ececec;
  flex-direction: row;
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const CardImage = styled.Image.attrs({
  source: image,
})`
  background-color: #ececec;
  height: 200px;
  width: 130px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const Infos = styled.View`
  padding: 20px 10px;
`;
export const Title = styled.Text`
  font-size: 21px;
  line-height: 23px;
  font-weight: bold;
  text-align: left;
`;
export const Segment = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
`;
export const Age = styled.Text`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
`;
export const Stars = styled.View`
  flex-direction: row;
  margin: 20px 0px 20px;
`;
export const DownloadButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px;
  border: 3px solid ${darken(0.1, '#f0cc56')};
  border-radius: 30px;
`;
export const TextButton = styled.Text`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  font-weight: bold;
  color: ${darken(0.1, '#f0cc56')};
`;
