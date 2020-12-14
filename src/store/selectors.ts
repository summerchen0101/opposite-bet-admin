import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { GlobalState } from './reducer'
import { RootState } from './rootReducer'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const selectModuleState = (state: { global: GlobalState }) => state.global

export const selectMenu = createSelector(
  selectModuleState,
  (global) => global.menu,
)
