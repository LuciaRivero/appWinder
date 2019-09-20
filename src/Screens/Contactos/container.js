import { connect } from 'react-redux';
import Contactos from './main';
import {postLogin} from '../../Services/Login/action';

const mapStateToProps = state => ({
  loginSuccess:  state
});

const mapDispatchToProps = {
 postLogin
}

export default connect( mapStateToProps, mapDispatchToProps)(Contactos);