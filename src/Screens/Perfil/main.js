import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,Button } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import defaultPerfil from '../../../assets/default_perfil.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Chip } from 'react-native-paper';

class Perfil extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Perfil'
    return {
      headerTitle: Title,
      headerStyle: {
        backgroundColor: '#15BDBF',
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
            <View>
              <Image source={defaultPerfil} style={styles.imagePefil}/>
              <Text style={styles.textCargo}>Nombre</Text>
              <Text>Cargo - puesto</Text>
              <Text style={styles.textDescription}>Lorem ipsum dolor sit amet consectetur, adipiscing elit pellentesque conubia posuere faucibus, vel a accumsan parturient. Neque proin gravida dictumst curae quisque velit eget, mattis vestibulum augue convallis id blandit felis, lectus dapibus rutrum vel sociis leo. Condimentum justo commodo primis blandit dui gravida nisl ad volutpat class suscipit sociosqu lobortis facilisis cum, mollis suspendisse potenti nec turpis vel venenatis metus pretium per augue tellus parturient.</Text>

              <Text style={styles.textIntreses}>Preferencias de networking</Text>
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="coffee" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="muffin" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <MaterialCommunityIcons style={{textAlignVertical:'center'}} name="bowl" size={24} color={BINDERstyles.colors.dark_grey}/> 
              <Text style={styles.textDescription}></Text>
              <Text style={styles.textIntreses}>Experiencia</Text>
              <Text style={styles.textDescription}>
                  <Text style={styles.textCargo}>Cargo </Text>
                  <Text>Empresa </Text>
                  <Text>Mes Año - Mes Año</Text>
              </Text>
              <Text style={styles.textIntreses}>Intereses</Text>
              <Chip style={styles.sizeChip}>Tecnologia</Chip>
              <Chip style={styles.sizeChip}>Lorem</Chip>
              <Chip style={styles.sizeChip}>Dolor sit</Chip>
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
