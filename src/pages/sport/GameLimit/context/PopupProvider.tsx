import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  autoOdds: PopupProps<boolean>
}

const PopupContext = createContext<IState | null>(null)

const PopupProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    autoOdds: useState(false),
  }
  return (
    <PopupContext.Provider value={initialState}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupProvider

export const usePopupProvider = (popupName: keyof IState) => {
  const state = useContext(PopupContext)
  return state[popupName]
}
