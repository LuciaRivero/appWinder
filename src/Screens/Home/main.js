import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import defaultPerfil from '../../../assets/default_perfil.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Binder'
    return {
      headerTitle: Title
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
