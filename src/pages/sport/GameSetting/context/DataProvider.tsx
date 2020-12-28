import React, { createContext, useContext, useState } from 'react'
import { Country, Sport } from '../API/types'

type DataProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  countryList: DataProps<Country[]>
  countryView: DataProps<Country>
  sportList: DataProps<Sport[]>
  sportView: DataProps<Sport>
}

const DataContext = createContext<IState | null>(null)

const DataProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    countryList: useState([]),
    countryView: useState(null),
    sportList: useState([]),
    sportView: useState(null),
  }
  return (
    <DataContext.Provider value={initialState}>{children}</DataContext.Provider>
  )
}

export default DataProvider

export const useDataProvider = () => useContext(DataContext)
