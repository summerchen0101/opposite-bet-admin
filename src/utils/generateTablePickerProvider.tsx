import React, { createContext, useContext, useState } from 'react'

interface ContextProps<T> {
  currentTable: T
  setCurrentTable: (value: T) => void
}

const generateTablePickerProvider = function <T extends string>(
  defaultValue: T,
): [React.FC, () => ContextProps<T>] {
  const TablePickerContext = createContext<ContextProps<T> | null>(null)
  const TablePickerProvider: React.FC = function ({ children }) {
    const [currentTable, setCurrentTable] = useState<T>(defaultValue)
    return (
      <TablePickerContext.Provider value={{ currentTable, setCurrentTable }}>
        {children}
      </TablePickerContext.Provider>
    )
  }
  const useTable = () => useContext(TablePickerContext)
  return [TablePickerProvider, useTable]
}

export default generateTablePickerProvider
