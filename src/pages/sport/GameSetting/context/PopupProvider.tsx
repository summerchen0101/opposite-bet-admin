import React, { createContext, useContext, useState } from 'react'

type PopupProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  countryList: PopupProps<boolean>
  createCountry: PopupProps<boolean>
  editCountry: PopupProps<boolean>

  sportList: PopupProps<boolean>
  createSport: PopupProps<boolean>
  editSport: PopupProps<boolean>

  categoryList: PopupProps<boolean>
  categoryForm: PopupProps<boolean>
  eventList: PopupProps<boolean>
  eventForm: PopupProps<boolean>
  gameList: PopupProps<boolean>
  gameForm: PopupProps<boolean>
  gameDetailList: PopupProps<boolean>
  gameDetailForm: PopupProps<boolean>
  leagueList: PopupProps<boolean>
  leagueForm: PopupProps<boolean>
  teamList: PopupProps<boolean>
  teamForm: PopupProps<boolean>
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

    categoryList: useState(false),
    categoryForm: useState(false),
    eventList: useState(false),
    eventForm: useState(false),
    gameList: useState(false),
    gameForm: useState(false),
    gameDetailList: useState(false),
    gameDetailForm: useState(false),
    leagueList: useState(false),
    leagueForm: useState(false),
    teamList: useState(false),
    teamForm: useState(false),
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
