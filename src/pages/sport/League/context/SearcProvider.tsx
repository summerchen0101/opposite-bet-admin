import React, { createContext, useContext, useState } from 'react'

type SearchProps<T> = [T, React.Dispatch<React.SetStateAction<T>>]
interface IState {
  gameId: SearchProps<number>
}

const SearchContext = createContext<IState | null>(null)

const SearchProvider: React.FC = ({ children }) => {
  const initialState: IState = {
    gameId: useState<number>(null),
  }
  return (
    <SearchContext.Provider value={initialState}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider

export const useSearchProvider = (searchName: keyof IState) => {
  const state = useContext(SearchContext)
  return state[searchName]
}
