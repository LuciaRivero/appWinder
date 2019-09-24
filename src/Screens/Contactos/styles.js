import { StyleSheet } from 'react-native';
import {BINDERstyles} from '../BinderStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
    backgroundColor:'#F2F3FA'
  },
  container: {
    justifyContent: "flex-start",
    backgroundColor: '#F2F3FA',
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
    height:100,
    
  },
  textDescription: {
    borderBottomColor:BINDERstyles.colors.light_grey,
    borderBottomWidth:1,
    width:'90%'
  },
  textTitle :{
    color:BINDERstyles.colors.warm_grey,
    fontWeight:'bold',
    marginLeft:15,
    fontSize:18
  },
  imgSize:{
    width:50,
    height:50,
    marginLeft:15,
    borderRadius:50
  },
  textName:{
    marginLeft:15,
  },
  boxMatch:{
    flex: 1,
    flexDirection: 'row',
  }
});