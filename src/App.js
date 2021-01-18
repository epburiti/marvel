import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalSyle from './Style/GlobalStyle';
import store from './store/index';
import Routes from './routes';
import { Provider } from 'react-redux';

function App() {

  return (
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalSyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;