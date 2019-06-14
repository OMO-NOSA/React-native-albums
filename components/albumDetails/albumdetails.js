import React from 'react';
import { Text } from 'react-native';
import Card from '@component/card';
import CardSection from '@component/cardsection';

const AlbumDetails = (props) =>{
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  )

};

export default AlbumDetails; 