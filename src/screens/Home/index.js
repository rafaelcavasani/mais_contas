import React from 'react';
import {View, Image} from 'react-native';
import {Container, WelcomeImage, WelcomeText, SecondText} from './styles';
import CustomAppbar from '../../components/CustomAppbar';

export default function Home() {
  return (
    <Container>
      <CustomAppbar title="Home" />
      <View>
        <WelcomeImage>
          <Image source={require('../../assets/logo.png')} />
        </WelcomeImage>
        <WelcomeText>Bem vindo ao App MAISContas</WelcomeText>
        <SecondText>
          Você poderá consultar o seu Saldo e visualizar suas transações
        </SecondText>
      </View>
    </Container>
  );
}
