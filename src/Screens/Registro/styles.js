import { StyleSheet } from 'react-native';
import {BINDERstyles} from '../BinderStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
    width:'100%'
  },
  textInputText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    color: BINDERstyles.colors.black
  },
  textLogin: {
    color: BINDERstyles.colors.aquamarine
  },
  textUnderLogin: {
    textAlign:'center',
    margin:15,
    color:BINDERstyles.colors.dark_grey
  },
  logo:{
    width:200,
    height:200
  },
  textBienvenida:{
    fontWeight:'bold',
    fontSize:22,
    color:BINDERstyles.colors.dark_grey
  },
  colorPassword:{
    color:BINDERstyles.colors.warm_grey,
    fontWeight:'bold',
    fontSize:14
  }
});