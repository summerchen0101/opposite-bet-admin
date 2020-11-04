import { StoreType } from '@/store'
import { useStore } from 'react-redux'
export default (name: string, reducer) => {
  const store: StoreType = useStore()
  store.injectReducer(name, reducer)
}
