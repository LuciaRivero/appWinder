import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking } from 'react-native';

class Home extends Component {

  render(){
    return(
      <View style={styles.container}><Text>Estoy en la home</Text></View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});