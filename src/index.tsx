import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import App from '@/components/App';
import LanguageProvider from '@/utils/LanguageProvider';
import AntDesignProvider from '@/utils/AntDesignProvider';

ReactDOM.render(
  <Provider store={store()}>
    <LanguageProvider>
      <AntDesignProvider>
        <App />
      </AntDesignProvider>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
