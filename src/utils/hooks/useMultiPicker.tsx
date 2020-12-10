import { useState } from 'react'

const useMultiPicker = (ids?: string[]) => {
  const [items, setItems] = useState<string[]>([])

  const addOne = (id: string) => setItems([...new Set([...items, id])])

  const removeOne = (id: string) => setItems(items.filter((_id) => _id !== id))

  const addMultiple = (ids: string[]) =>
    setItems([...new Set([...items, ...ids])])

  const removeMultiple = (ids: string[]) =>
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
