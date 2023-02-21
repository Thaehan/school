import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {Colors} from 'react-native-ui-lib';
import RNBootSplash from 'react-native-bootsplash';

import '@Themes';
import {store} from '@Store/configureStore';
import AppNavigator from '@Navigations/AppNavigator';
import Loading from '@Components/Loading/Loading';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
      <Loading />
    </Provider>
  );
}
