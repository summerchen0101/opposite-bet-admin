import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  createForm: PopupProps<boolean>
  editForm: PopupProps<boolean>
  detail: PopupProps<boolean>
  invitedForm: PopupProps<boolean>
  aliasAccount: PopupProps<boolean>
  percentCreate: PopupProps<boolean>
  percentEdit: PopupProps<boolean>
  depositHistory: PopupProps<boolean>
  withdrawHistory: PopupProps<boolean>
  pwForm: PopupProps<boolean>
  bankCardList: PopupProps<boolean>
  bankCardForm: PopupProps<boolean>
}

const PopupContext = createContext<IState | null>(null)

const PopupProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    createForm: useState(false),
    editForm: useState(false),
    detail: useState(false),
    invitedForm: useState(false),
    aliasAccount: useState(false),
    percentCreate: useState(false),
    percentEdit: useState(false),
    depositHistory: useState(false),
    withdrawHistory: useState(false),
    pwForm: useState(false),
    bankCardList: useState(false),
    bankCardForm: useState(false),
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
