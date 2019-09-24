import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,FeatherIcon } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/img/cat.jpg'
import img2 from '../../../assets/img/dog.jpg'
class LogoTitleRight extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons onPress={() => this.props.navigation.navigate('Contactos')} style={{textAlignVertical:'center', paddingLeft: 25, paddingRight:25}} name="magnify" size={30} color={BINDERstyles.colors.dark_grey}/>
    );
  }
}

const MATCHES = [
  { "id": 1, "name": "Lucia Rivero", "image": img1 ,},
  { "id": 2, "name": "Carlos Perez", "image": img2},
  
]

const CONVERSACIONES = [
  {"id":1, "name": "Lucia Rivero", "message": "este es un mensaje de prueba", "image": img1},
  {"id":2, "name": "Juan Perez", "message": "este es un mensaje de prueba", "image": img2}
]

class Contactos extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Mi network'
    return {
      headerTitle: Title,
      headerRight: <LogoTitleRight navigation={navigation}/>,
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

  componentDidMount () {
    const {getMatchs} = this.props;
    getMatchs()
  }

  returnMatches = () => {
    return( 
      MATCHES.map( match => {
        let img = match.image;
        return(
          <View key={match.id} style={styles.boxMatch}>
            <Image style={styles.imgSize} source={match.image}/>
          </View>
        )  
      })
      
    )
  }

  returnConversaciones = () => {
    return(
      CONVERSACIONES.map( conversacion => {
        return (
          <View key={conversacion.id}>
            <Text style={styles.textName}>{conversacion.name}</Text>
            <Image style={styles.imgSize} source={conversacion.image}/>
            <Text>{conversacion.message}</Text>
          </View>
          )
      } 
      )
    )
  }

  render(){
    return(
      <ScrollView style={styles.fondo}>
        <View  style={styles.container}>
          <Text style={styles.textTitle}>Matches</Text>
          {this.returnMatches()}
          <Text style={styles.textTitle}>Conversaciones</Text>
          {this.returnConversaciones()}
        </View>
      </ScrollView>
    )
  }
}

export default Contactos;
