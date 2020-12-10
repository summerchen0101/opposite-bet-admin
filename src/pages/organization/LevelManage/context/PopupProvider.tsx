import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  createForm: PopupProps<boolean>
  percentForm: PopupProps<boolean>
  pwForm: PopupProps<boolean>
  invitedForm: PopupProps<boolean>
  whiteList: PopupProps<boolean>
}

const PopupContext = createContext<IState | null>(null)

const PopupProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    createForm: useState(false),
    percentForm: useState(false),
    pwForm: useState(false),
    invitedForm: useState(false),
    whiteList: useState(false),
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
