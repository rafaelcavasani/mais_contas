import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 60px;
  background-color: #00a884;
  flex-direction: row;
`;
export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 40px;
  border: 8px solid #00a884;
  margin-top: -25px;
`;

export const TextItem = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const TextItemContrast = styled.Text`
  color: #21695a;
  font-size: 12px;
`;
