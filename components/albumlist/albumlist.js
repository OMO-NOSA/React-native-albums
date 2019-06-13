import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetails from '../albumDetails';
import styles from './styles';
import axios from 'axios';

class AlbumList extends Component{
  state = { albums: [] };
  componentWillMount(){
    axios.get('https:localhost:8000/api/')
      .then(response => this.setState({ albums: response.data }) );

  }

  renderAlbums(){
    return this.state.albums.map(album => 
      <AlbumDetails key={album.title} album={album}/>);
  }
  render(){
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
