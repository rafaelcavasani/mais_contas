import React from 'react';
import {InputArea, Input} from './styles';

export default ({Icon, placeHolder, value, onChangeText, password}) => {
  return (
    <InputArea>
      {/* <Icon /> */}
      <Input
        placeholder={placeHolder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
