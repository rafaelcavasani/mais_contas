import React from 'react';
import {View} from 'react-native';
import {Container, WellcomeText, SecondText} from './styles';
import CustomAppbar from '../../components/CustomAppbar';

export default () => {
  return (
    <Container>
      <CustomAppbar title="Home" />
      <View>
        <WellcomeText>Bem vindo ao App MAISContas</WellcomeText>
        <SecondText>
          Você poderá consultar o seu Saldo e visualizar suas transações
        </SecondText>
      </View>
    </Container>
  );
};
