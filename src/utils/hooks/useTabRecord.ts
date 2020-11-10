import { addTab, removeTab } from '@/store/reducer'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { PageGenerator } from '../pageGenerator'
export default (pageInstance: PageGenerator) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addTab(pageInstance.getTab()))
  }, [])
}
