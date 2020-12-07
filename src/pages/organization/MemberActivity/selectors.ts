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
export const selectDisplayDepositModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayDepositModal,
)
export const selectDisplayWithdrawalModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayWithdrawalModal,
)
export const selectDisplayLoginCountModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayLoginCountModal,
)
export const selectDisplayRegisterCountModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayRegisterCountModal,
)
