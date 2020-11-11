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
export const selectDisplayReviewModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayReviewModal,
)
export const selectDisplayWaitingModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayWaitingModal,
)
export const selectDisplayRejectModal = createSelector(
  selectModuleState,
  (moduleState) => moduleState.displayRejectModal,
)
