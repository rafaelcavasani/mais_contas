import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, InputArea, CustomButton, CustomButtonText} from './styles';
import SignInInput from '../../components/SignInInput';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();

  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (usernameField !== '' && passwordField !== '') {
      try {
        let json = await api.signIn(usernameField, passwordField);
        console.log(json);
        if (json.username) {
          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          Alert.alert('Erro', 'E-mail e/ou senha errados!');
        }
      } catch (exception) {
        Alert.alert(
          'Erro',
          `Ocorreu um erro durante o login: ${exception.message}`,
        );
      }
    } else {
      Alert.alert('Erro', 'Preencha os campos!');
    }
  };

  return (
    <Container>
      <InputArea>
        <SignInInput
          icon="user-circle"
          placeHolder="Digite seu nome de usuário"
          value={usernameField}
          onChangeText={(t) => setUsernameField(t)}
        />

        <SignInInput
          icon="unlock-alt"
          placeHolder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
