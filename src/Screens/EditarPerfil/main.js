import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultPerfil from '../../../assets/default_perfil.png';


class LogoTitleRight extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons  style={{textAlignVertical:'center', paddingLeft: 25, paddingRight:25}} name="dots-vertical" size={30} color={BINDERstyles.colors.dark_grey}/>
    );
  }
}

class EditarPerfil extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Editar Perfil'
    return {
      headerTitle: Title,
      headerRight: <LogoTitleRight navigation={navigation}/>,
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
              <Text>
                <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="trophy-award" size={24} color={BINDERstyles.colors.dark_grey}/> Nivel 1
                <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="pencil-outline" size={24} color={BINDERstyles.colors.dark_grey}/>
              </Text>
              <Image source={defaultPerfil} style={styles.imagePefil}/>
              <Text>Nombre</Text>
              <Text>Cargo - puesto</Text>
              <Text style={styles.textDescription}></Text>
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="microphone" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="video" size={24} color={BINDERstyles.colors.dark_grey}/> 
            </View>     
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card]}>
            <View >
              <Text> Intereses
                <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="pencil-outline" size={24} color={BINDERstyles.colors.dark_grey}/>
              </Text>
            </View>     
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card]}>
            <View >
              <Text> Preferencias de networking
                <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="pencil-outline" size={24} color={BINDERstyles.colors.dark_grey}/>
              </Text>
            </View>     
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card]}>
            <View >
              <Text> Experiencia </Text>
            </View>     
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default EditarPerfil;
