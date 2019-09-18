import { NavigationActions, StackActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function navigateAndReset(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action: StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName,
            params
          })
        ]
      })
    })
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

export default {
  navigate,
  navigateAndReset,
  setTopLevelNavigator,
  openDrawer
};
