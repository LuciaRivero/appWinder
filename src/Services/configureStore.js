import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../Reducer/RootReducer';
import apiMiddleware from './middleware/apiMiddleware';


export default function configureStore(preloadedState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  return createStore(rootReducer,
    compose(
      composeEnhancers(applyMiddleware(
        apiMiddleware,
        thunkMiddleware,
        // logger // Logger de Redux para poder ver como cambia el state después de cada action
      )
      )));

}
