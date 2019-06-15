import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}> Hit Here </Text>
    </TouchableOpacity>
  );

};

export default Button;