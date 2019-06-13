import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import styles from './styles';
import axios from 'axios';

class AlbumList extends Component{
  componentWillMount(){
    axios.get('https:localhost:8000/api/')
      .then(response => console.log(response));

  }
  render(){

  }

}

export default AlbumList;
