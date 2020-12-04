import ChangePwPopup from '@/components/ChangePwPopup'
import { createAction, createReducer } from '@reduxjs/toolkit'
import React, { createContext, useContext, useReducer, useState } from 'react'
import { ContextDevTool } from 'react-context-devtool'

interface PopupModals {
  changePw: boolean
}

interface ContextState<T> {
  popups: T
  setPopups: React.Dispatch<React.SetStateAction<T>>
}
const PopupContext = createContext<ContextState<PopupModals>>(null)

export const PopupContextProvider: React.FC = ({ children }) => {
  const [popups, setPopups] = useState({
    changePw: false,
  })
  return (
    <PopupContext.Provider value={{ popups, setPopups }}>
      <ContextDevTool
        context={PopupContext}
        id="PopupContext"
        displayName="PopupContext"
      />
      {children}
      <ChangePwPopup />
    </PopupContext.Provider>
  )
}

export const usePopup = (target: keyof PopupModals) => {
  const { popups, setPopups } = useContext(PopupContext)
  const visible = popups[target]
  const setVisible = (value: boolean) =>
    setPopups({ ...popups, [target]: value })
  return { visible, setVisible }
}

export default PopupContextProvider
