import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  createForm: PopupProps<boolean>
  memberCreateForm: PopupProps<boolean>
  memberEditForm: PopupProps<boolean>
  percentForm: PopupProps<boolean>
  pwForm: PopupProps<boolean>
  invitedForm: PopupProps<boolean>
  whiteList: PopupProps<boolean>
  tradeHistory: PopupProps<boolean>
  depositHistory: PopupProps<boolean>
  withdrawHistory: PopupProps<boolean>
  pointForm: PopupProps<boolean>
  bankCardList: PopupProps<boolean>
  bankCardForm: PopupProps<boolean>
}

const PopupContext = createContext<IState | null>(null)

const PopupProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    createForm: useState(false),
    memberCreateForm: useState(false),
    memberEditForm: useState(false),
    percentForm: useState(false),
    pwForm: useState(false),
    invitedForm: useState(false),
    whiteList: useState(false),
    tradeHistory: useState(false),
    depositHistory: useState(false),
    withdrawHistory: useState(false),
    pointForm: useState(false),
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
