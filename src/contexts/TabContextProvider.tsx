import { TabType } from '@/store/reducer'
import { createAction, createReducer } from '@reduxjs/toolkit'
import React, { useReducer } from 'react'

const initialState: { tabs: TabType[] } = {
  tabs: [],
}

const addTab = createAction<TabType>('addTab')
const removeTab = createAction<string>('removeTab')
const clearTabs = createAction<string>('clearTabs')

const TabLimit = 10

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTab, (state, action) => {
      if (state.tabs.findIndex((t) => t.path === action.payload.path) > -1) {
        return
      }
      if (state.tabs.length >= TabLimit) {
        state.tabs.shift()
      }
      state.tabs.push(action.payload)
    })
    .addCase(removeTab, (state, action) => {
      state.tabs = state.tabs.filter((tab) => tab.path !== action.payload)
    })
    .addCase(clearTabs, (state, action) => {
      state.tabs = state.tabs.filter((tab) => {
        return tab.path === action.payload
      })
    })
})

export const TabContext = React.createContext<{
  tabs: TabType[]
  addTab: (tab: TabType) => void
  removeTab: (path: string) => void
  clearTabs: (path: string) => void
} | null>(null)

const TabContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TabContext.Provider
      value={{
        tabs: state.tabs,
        addTab: (tab: TabType) => dispatch(addTab(tab)),
        removeTab: (path: string) => dispatch(removeTab(path)),
        clearTabs: (path: string) => dispatch(clearTabs(path)),
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

export default TabContextProvider
