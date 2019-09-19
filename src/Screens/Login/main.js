import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking, Button } from 'react-native';

class Login extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>Estoy en Login</Text>
        <Button
          title="Logueate"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});