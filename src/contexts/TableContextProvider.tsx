import { createReducer, createAction } from '@reduxjs/toolkit'
import React, { useReducer, useState } from 'react'
import { ContextDevTool } from 'react-context-devtool'

const initialState: { selected: string[] } = {
  selected: [],
}

const selectOne = createAction<string>('addToSelected')
const unselectOne = createAction<string>('unselectOne')
const selectAll = createAction<string[]>('selectAll')
const unselectAll = createAction('unselectAll')

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectOne, (state, action) => {
      state.selected.push(action.payload)
    })
    .addCase(unselectOne, (state, action) => {
      state.selected = state.selected.filter((_id) => _id !== action.payload)
    })
    .addCase(selectAll, (state, action) => {
      state.selected = [...new Set(state.selected.concat(action.payload))]
    })
    .addCase(unselectAll, (state) => {
      state.selected = []
    })
})

interface TableContextProps {
  selected: string[]
  selectOne: (id: string) => void
  unselectOne: (id: string) => void
  selectAll: (ids: string[]) => void
  unselectAll: () => void
}

export const TableContext = React.createContext<TableContextProps | null>(null)
TableContext.displayName = 'TableContext'

const TableContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TableContext.Provider
      value={{
        selected: state.selected,
        selectOne: (id: string) => dispatch(selectOne(id)),
        unselectOne: (id: string) => dispatch(unselectOne(id)),
        selectAll: (ids: string[]) => dispatch(selectAll(ids)),
        unselectAll: () => dispatch(unselectAll()),
      }}
    >
      <ContextDevTool
        context={TableContext}
        id="uniqContextId"
        displayName="TableContext"
      />
      {children}
    </TableContext.Provider>
  )
}

export default TableContextProvider
