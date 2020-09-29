import React from 'react';
import {
  TabArea,
  TabItem,
  TabItemCenter,
  TextItem,
  TextItemContrast,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon name="home" size={28} color="#FFF" />
        <TextItem>Home</TextItem>
      </TabItem>
      <TabItem onPress={() => goTo('Home')}>
        <Icon name="handshake-o" size={28} color="#FFF" />
        <TextItem>Transações</TextItem>
      </TabItem>
      <TabItemCenter onPress={() => goTo('Home')}>
        <Icon name="dollar" size={28} color="#21695a" />
        <TextItemContrast>Pagar</TextItemContrast>
      </TabItemCenter>
      <TabItem onPress={() => goTo('Home')}>
        <Icon name="credit-card-alt" size={28} color="#FFF" />
        <TextItem>Cartões</TextItem>
      </TabItem>
      <TabItem onPress={() => goTo('Home')}>
        <Icon name="user" size={28} color="#FFF" />
        <TextItem>Perfil</TextItem>
      </TabItem>
    </TabArea>
  );
};
