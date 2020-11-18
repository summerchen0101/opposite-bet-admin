import React from 'react'
import { IntlProvider } from 'react-intl'
import zhHantMessages from '@/lang/zh-Hant.json'
import enMessages from '@/lang/en.json'
import { useTypedSelector } from '@/store/selectors'

const messageMap = {
  'zh-Hant': zhHantMessages,
  en: enMessages,
}

const LanguageProvider: React.FC = ({ children }) => {
  const language = useTypedSelector((state) => state.global.language)
  return (
    <IntlProvider locale={language} messages={messageMap[language]}>
      {children}
    </IntlProvider>
  )
}
export default LanguageProvider
