import { StyleSheet } from 'react-native';
import {BINDERstyles} from '../BinderStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
    backgroundColor:'#fff'
  },
  container: {
    justifyContent: "flex-start",
    backgroundColor: BINDERstyles.colors.white,
    paddingVertical: 16
  },
  card: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: BINDERstyles.colors.white,
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: BINDERstyles.colors.light_grey,
    margin: 8,
    marginTop: 0,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  imagePefil:{
    width: 200,
    height:200,
    borderRadius:300,
  },
  textDescription: {
    borderBottomColor:BINDERstyles.colors.light_grey,
    borderBottomWidth:1,
    width:'90%',
    padding:5
  },
  textCargo:{
    fontWeight: "bold"
  },
  sizeChip:{
    width:80,
  },
  textIntreses:{
    color:BINDERstyles.colors.dark_grey,
    fontSize:15,
    margin:5
  }
});