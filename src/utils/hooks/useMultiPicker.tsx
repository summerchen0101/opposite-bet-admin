import { useState } from 'react'

type IdType = string | number
const useMultiPicker = (ids?: IdType[]) => {
  const [items, setItems] = useState<IdType[]>([])

  const addOne = (id: IdType) => setItems([...new Set([...items, id])])

  const removeOne = (id: IdType) => setItems(items.filter((_id) => _id !== id))

  const addMultiple = (ids: IdType[]) =>
    setItems([...new Set([...items, ...ids])])

  const removeMultiple = (ids: IdType[]) =>
    setItems(items.filter((_id) => !ids.includes(_id)))

  const addAll = () => addMultiple(ids)

  const removeAll = () => removeMultiple(ids)

  return {
    items,
    addOne,
    removeOne,
    addMultiple,
    removeMultiple,
    addAll,
    removeAll,
  }
}

export default useMultiPicker
