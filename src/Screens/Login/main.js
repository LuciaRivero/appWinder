import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking, Button, TextInput} from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';

class Registrer extends Component {
  state = {
    nombre:'',
    email:'',
    password:'',
    hidePass: true,
  }


  renderFormRegistro = () => {
    return(
      <View style={{ flex: 1, marginTop: 24 }}>
        <TextInput
          style={[styles.textInputText]}
          onFocus={this.focoEnUsuario}
          onBlur={this.blurEnUsuario}
          placeholder="Nombre"
          placeholderTextColor={ BINDERstyles.colors.warm_grey }
          underlineColorAndroid="transparent"
          maxLength={40}
          selectionColor = {BINDERstyles.colors.cherry_red }
          onChangeText={(nombre) => this.setState({nombre})}
          value={this.state.nombre}
        />
        <TextInput
          style={[styles.textInputText]}
          placeholder="Password"
          placeholderTextColor={ BINDERstyles.colors.warm_grey }
          underlineColorAndroid="transparent"
          maxLength={40}
          selectionColor = {BINDERstyles.colors.cherry_red }
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry= {this.state.hidePass}
        />
      </View>
    )
  }
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text>¡Hola otra vez!</Text>
          {this.renderFormRegistro()}
          <Button
            color={BINDERstyles.colors.yellow}
            title="LOGIN"
            onPress={() => this.props.navigation.navigate('Home')}/>
          <Text style={[styles.textUnderLogin]}>
            <Text> ¿Nuevo Binder? </Text>
            <Text onPress={() => this.props.navigation.navigate('Registro')} style={[styles.textLogin]}>Registrarse</Text>
          </Text>
        </View>
      </ScrollView>
      
    )
  }
}

export default Registrer;