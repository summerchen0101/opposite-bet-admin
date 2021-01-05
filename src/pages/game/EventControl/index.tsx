import { Dashboard } from '@/components'
import { useReducerInjector } from '@/utils/hooks'
import React, { useEffect } from 'react'
import PopupProvider from '../context/PopupProvider'
import Main from './containers/Main'
import reducer, { moduleName } from './reducer'
import { useAPIService } from './service'

const MarqueePage: React.FC = () => {
  useReducerInjector(moduleName, reducer)
  const { getTableData, getSectionOptions, getPlayOptions } = useAPIService()

  useEffect(() => {
    // Promise.all([getTableData(), getSectionOptions(), getPlayOptions()])
  }, [])
  return (
    <PopupProvider>
      <Main />
    </PopupProvider>
  )
}

export default MarqueePage
