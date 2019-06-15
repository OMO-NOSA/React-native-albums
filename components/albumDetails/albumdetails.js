import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from '@component/card';
import CardSection from '@component/cardsection';
import styles from './styles'

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri:thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri:image}}
          style={imageStyle}
        />>
      </CardSection>
    </Card>
  )

};

export default AlbumDetails; 