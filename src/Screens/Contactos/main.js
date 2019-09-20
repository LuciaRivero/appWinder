import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,FeatherIcon } from 'react-native';
import styles from './styles';
import {BINDERstyles} from '../BinderStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class LogoTitleRight extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons onPress={() => this.props.navigation.navigate('Contactos')} style={{textAlignVertical:'center', paddingLeft: 25, paddingRight:25}} name="magnify" size={30} color={BINDERstyles.colors.dark_grey}/>
    );
  }
}

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const Title = 'Mi network'
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
            <Text>Matches</Text>
            <Text>Conversaciones</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Home;
