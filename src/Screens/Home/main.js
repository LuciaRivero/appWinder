import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,FeatherIcon } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import defaultPerfil from '../../../assets/default_perfil.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class LogoTitleLeft extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons onPress={() => this.props.navigation.navigate('Perfil')} style={{textAlignVertical:'center', paddingLeft: 25, paddingRight:25}} name="account-circle-outline" size={30} color={BINDERstyles.colors.dark_grey}/>
    );
  }
}

class LogoTitleRight extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons onPress={() => this.props.navigation.navigate('Contactos')} style={{textAlignVertical:'center', paddingLeft: 25, paddingRight:25}} name="forum" size={30} color={BINDERstyles.colors.dark_grey}/>
    );
  }
}

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Binder'
    return {
      headerTitle: Title,
      headerRight: <LogoTitleRight navigation={navigation}/>,
      headerLeft: <LogoTitleLeft navigation={navigation}/>,
      headerStyle: {
        backgroundColor: '#E4E720',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
      },
    };
  }

  render(){
    
    return(
      <ScrollView style={styles.fondo}>
        <View  style={styles.container}>
          <TouchableOpacity style={[styles.card]}>
            <View >
              <Image source={defaultPerfil} style={styles.imagePefil}/>
              <Text>Nombre</Text>
              <Text>Cargo - puesto</Text>
              <Text style={styles.textDescription}>descripcion</Text>

              <Text>Preferencias de networking</Text>
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="coffee" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="muffin" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="bowl" size={24} color={BINDERstyles.colors.dark_grey}/> 
            </View>     
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Home;
