import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  countryList: PopupProps<boolean>
  createCountry: PopupProps<boolean>
  editCountry: PopupProps<boolean>

  sportList: PopupProps<boolean>
  createSport: PopupProps<boolean>
  editSport: PopupProps<boolean>
}

const PopupContext = createContext<IState | null>(null)

const PopupProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    countryList: useState(false),
    createCountry: useState(false),
    editCountry: useState(false),

    sportList: useState(false),
    createSport: useState(false),
    editSport: useState(false),
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
