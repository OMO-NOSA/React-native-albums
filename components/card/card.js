import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Card = (props) =>{
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )

};

export default Card;
