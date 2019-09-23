import { connect } from 'react-redux';
import Contactos from './main';
import {getMatchs} from '../../Services/Contactos/action';

const mapStateToProps = state => ({
  matchs: state
});

const mapDispatchToProps = {
  getMatchs
}

export default connect( mapStateToProps, mapDispatchToProps)(Contactos);