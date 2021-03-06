import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #cbece5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SignInImage = styled.View`
  padding: 0 50px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #00a884;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;
