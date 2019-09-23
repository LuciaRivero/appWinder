import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking, Button, TextInput} from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import BinderLogo from '../../../assets/binder-logo.png';

class Registrer extends Component {
  state = {
    nombre:'',
    email:'',
    password:'',
    hidePass: true,
  }


  renderFormLogin = () => {
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
          placeholder="Email"
          placeholderTextColor={ BINDERstyles.colors.warm_grey }
          underlineColorAndroid="transparent"
          maxLength={40}
          selectionColor = {BINDERstyles.colors.cherry_red }
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
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
        <Image source={BinderLogo} style={styles.logo}/>
          <Text>Bienvenido a Binder</Text>
          {this.renderFormLogin()}
          <Button
            color={BINDERstyles.colors.yellow}
            title="REGISTRARSE"
            onPress={() => this.props.navigation.navigate('Home')}/>
          <Text style={[styles.textUnderLogin]}>
            <Text> Ya tenés una cuenta </Text>
            <Text onPress={() => this.props.navigation.navigate('Login')} style={[styles.textLogin]}>Login</Text>
          </Text>
        </View>
      </ScrollView>
      
    )
  }
}

export default Registrer;