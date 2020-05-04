import React from 'react';
import { Provider } from 'react-redux'

import Navigation from './src/core/navigation/Navigation'
//import Store from './src/core/store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    /*let persistor = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>
    );*/
    return (
        <SafeAreaProvider>
            <Navigation/>
        </SafeAreaProvider>
    )
  } 
}
