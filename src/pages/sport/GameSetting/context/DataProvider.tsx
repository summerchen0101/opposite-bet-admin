import React, { createContext, useContext, useState } from 'react'
import { Country } from '../API/types'

type DataProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  list: DataProps<Country[]>
  view: DataProps<Country>
}

const DataContext = createContext<IState | null>(null)

const DataProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    list: useState([]),
    view: useState(null),
  }
  return (
    <DataContext.Provider value={initialState}>{children}</DataContext.Provider>
  )
}

export default DataProvider

export const useDataProvider = () => useContext(DataContext)
