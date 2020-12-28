import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, moduleName } from './reducer'

interface IModuleState {
  [moduleName]: IState
}

export const useTypedSelector: TypedUseSelectorHook<IModuleState> = useSelector

export const selectModuleState = (state: IModuleState) => state[moduleName]

export const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
)
export const selectEditData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.editData,
)
export const selectCountryOpts = createSelector(
  selectModuleState,
  (moduleState) => moduleState.countryOpts,
)
export const selectSportOpts = createSelector(
  selectModuleState,
  (moduleState) => moduleState.sportOpts,
)
