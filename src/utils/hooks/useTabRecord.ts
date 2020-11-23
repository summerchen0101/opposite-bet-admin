import { TabContext } from '@/contexts/TabContextProvider'
import { useContext, useEffect } from 'react'
import { PageGenerator } from '../pageGenerator'
export default (pageInstance: PageGenerator) => {
  const { addTab } = useContext(TabContext)
  useEffect(() => {
    addTab(pageInstance.getTab())
  }, [])
}
