import React from 'react';
import { Provider } from 'react-redux'

import Navigation from 'core/navigation/Navigation'
import Store from 'core/store/configureStore'

export default class App extends React.Component {

  render(){
    return (
      <Provider store={Store}>
          <Navigation/>
      </Provider>
    );
  } 
}
