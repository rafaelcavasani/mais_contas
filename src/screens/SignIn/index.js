import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation, Image} from '@react-navigation/native';
import {Container, InputArea, CustomButton, CustomButtonText} from './styles';
import SignInInput from '../../components/SignInInput';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  const navigation = useNavigation();

  const [usernameField, setUsernameField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (usernameField !== '' && passwordField !== '') {
      try {
        let json = await api.signIn(usernameField, passwordField);
        if (json) {
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
      {/* <Image source={require('../../assets/logo.png')} /> */}
      <InputArea>
        <SignInInput
          icon={<Icon name="home" size={18} color="#999" />}
          placeholder="Digite seu nomde de usuário"
          value={usernameField}
          onChangeText={(t) => setUsernameField(t)}
        />

        <SignInInput
          icon={<Icon name="home" size={18} color="#999" />}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
