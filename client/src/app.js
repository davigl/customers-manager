import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import Styles from '~/assets/styles';
import store from '~/redux/store';
import Routes from '~/routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Styles />
    </Provider>
  );
}

export default App;
