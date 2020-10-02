import React from 'react';
import {
  TabArea,
  TabItem,
  TabItemCenter,
  TextItem,
  TextItemContrast,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomTabBar({state, navigation}) {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          name="home"
          size={28}
          color={state.index === 0 ? '#FFF' : '#cbece5'}
        />
        <TextItem>Home</TextItem>
      </TabItem>
      <TabItem onPress={() => goTo('Transactions')}>
        <Icon
          name="handshake-o"
          size={28}
          color={state.index === 1 ? '#FFF' : '#cbece5'}
        />
        <TextItem>Transações</TextItem>
      </TabItem>
      <TabItemCenter onPress={() => goTo('Home')}>
        <Icon
          name="dollar"
          size={28}
          color={state.index === 2 ? '#21695a' : '#21695a'}
        />
        <TextItemContrast>Pagar</TextItemContrast>
      </TabItemCenter>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          name="credit-card-alt"
          size={28}
          color={state.index === 3 ? '#FFF' : '#cbece5'}
        />
        <TextItem>Cartões</TextItem>
      </TabItem>
      <TabItem onPress={() => goTo('Home')}>
        <Icon
          name="user"
          size={28}
          color={state.index === 4 ? '#FFF' : '#cbece5'}
        />
        <TextItem>Perfil</TextItem>
      </TabItem>
    </TabArea>
  );
}
