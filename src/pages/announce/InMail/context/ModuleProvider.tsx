import { AnyAction, createAction, createReducer } from '@reduxjs/toolkit'
import React, { createContext, useContext, useReducer, useState } from 'react'

type TabType = 'send' | 'recieve'

interface IState {
  tab: TabType
}
const initialState: IState = {
  tab: 'send',
}

export const setTab = createAction<TabType>('tab/setTab')

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setTab, (state, action) => {
    state.tab = action.payload
  })
})

const ModuleContext = createContext<{
  state: IState
  dispatch: React.Dispatch<AnyAction>
}>(null)

const ModuleProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ModuleContext.Provider value={{ state, dispatch }}>
      {children}
    </ModuleContext.Provider>
  )
}

export default ModuleProvider

export const useModuleProvider = () => useContext(ModuleContext)
