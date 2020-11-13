import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { IState, moduleName } from './reducer'

interface IModuleState {
  [moduleName]: IState
}

export const useTypedSelector: TypedUseSelectorHook<IModuleState> = useSelector

const selectModuleState = (state: IModuleState) => state[moduleName]
const selectTableData = createSelector(
  selectModuleState,
  (moduleState) => moduleState.tableData,
)
export const selectDisplayCreateModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayCreateModal,
)
export const selectDisplaySecondSettingModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displaySecondSettingModal,
)
