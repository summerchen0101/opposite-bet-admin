import BettingLimitPopup from '@/components/popups/BettingLimitPopup'
import ChangePwPopup from '@/components/popups/ChangePwPopup'
import LoginHistoryPopup from '@/components/popups/LoginHistoryPopup'
import React, { createContext, useContext, useState } from 'react'
import { ContextDevTool } from 'react-context-devtool'

interface IState {
  changePw: boolean
  bettingLimit: boolean
  loginHistory: boolean
}

const initialState: IState = {
  changePw: false,
  bettingLimit: false,
  loginHistory: false,
}

interface ContextState<T> {
  popups: T
  setPopups: React.Dispatch<React.SetStateAction<T>>
}
const PopupContext = createContext<ContextState<IState>>(null)

export const PopupContextProvider: React.FC = ({ children }) => {
  const [popups, setPopups] = useState(initialState)
  return (
    <PopupContext.Provider value={{ popups, setPopups }}>
      <ContextDevTool
        context={PopupContext}
        id="PopupContext"
        displayName="PopupContext"
      />
      {children}
      <ChangePwPopup />
      <BettingLimitPopup />
      <LoginHistoryPopup />
    </PopupContext.Provider>
  )
}

export const usePopup = (target: keyof IState) => {
  const { popups, setPopups } = useContext(PopupContext)
  const visible = popups[target]
  const setVisible = (value: boolean) =>
    setPopups({ ...popups, [target]: value })
  return { visible, setVisible }
}

export default PopupContextProvider
