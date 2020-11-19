import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import App from '@/components/App'
import LanguageProvider from '@/utils/LanguageProvider'
import AntDesignProvider from '@/utils/AntDesignProvider'
import RouterProvider from '@/utils/RouterProvider'
import { Helmet } from 'react-helmet'
import GlobalStyle from '@/utils/global-style'

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>MS反波膽</title>
    </Helmet>
    <LanguageProvider>
      <AntDesignProvider>
        <RouterProvider>
          <App />
          <GlobalStyle />
        </RouterProvider>
      </AntDesignProvider>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
)
