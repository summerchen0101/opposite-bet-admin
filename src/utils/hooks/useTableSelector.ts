import { TableContext } from '@/contexts/TableContextProvider'
import { useContext } from 'react'

export const useTableSelect = function (id: string) {
  const { selectOne, unselectOne, selected } = useContext(TableContext)
  const isSelected = selected.includes(id)
  const handleSelect = (check: boolean) =>
    check ? selectOne(id) : unselectOne(id)
  return { isSelected, handleSelect }
}
export const useTableSelectAll = function <T extends { id: string }>(
  data: T[],
) {
  const { selectAll, unselectAll } = useContext(TableContext)
  const handleSelectAll = (check: boolean) =>
    check ? selectAll(data.map((t) => t.id)) : unselectAll()
  return { handleSelectAll }
}
