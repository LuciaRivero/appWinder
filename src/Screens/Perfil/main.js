import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,Button } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import defaultPerfil from '../../../assets/default_perfil.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Perfil extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Perfil'
    return {
      headerTitle: Title,
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
              <Text style={styles.textDescription}></Text>
              <Text>Experiencia</Text>
              <Text style={styles.textDescription}>
                  <Text>Cargo </Text>
                  <Text>Empresa </Text>
                  <Text>Mes Año - Mes Año</Text>
              </Text>
              <Text>Intereses</Text>

            </View>     
          </TouchableOpacity>
          <Button
            color={BINDERstyles.colors.yellow}
            title="Editar Perfil"
            onPress={() => this.props.navigation.navigate('EditarPerfil')}/>
        </View>
      </ScrollView>
    )
  }
}

export default Perfil;
