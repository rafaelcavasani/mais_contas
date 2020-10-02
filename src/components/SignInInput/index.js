import React from 'react';
import {InputArea, Input} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignInInput({
  icon,
  placeHolder,
  value,
  onChangeText,
  password,
}) {
  return (
    <InputArea>
      {icon && <Icon name={icon} size={18} color="#21695a" />}
      <Input
        placeholder={placeHolder}
        placeholderTextColor="#21695a"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
}
