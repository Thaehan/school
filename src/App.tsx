import {Provider} from 'react-redux';
import React from 'react';

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
