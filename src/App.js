import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalSyle from './Style/GlobalStyle';
import { store, persistor, sagaMiddleware } from './store/index';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalSyle />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;