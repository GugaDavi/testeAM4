import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 20px;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 23px;
  line-height: 26px;
  font-weight: bold;
  margin: 20px 0px;
  color: ${darken(0.17, '#f0cc56')};
`;
