import { useSelector, TypedUseSelectorHook } from 'react-redux'
import globalReducer from './reducer'
export interface RootState {
  global: ReturnType<typeof globalReducer>
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const staticReducer = {
  global: globalReducer,
}

export default staticReducer
