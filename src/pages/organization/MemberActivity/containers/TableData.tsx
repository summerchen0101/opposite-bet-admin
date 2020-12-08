import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  toggleDepositModal,
  toggleLoginCountModal,
  toggleRegisterCountModal,
  toggleWithdrawalModal,
} from '../reducer'
import { FilterFilled } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'

const columns = [
  {
    title: '代理商',
    width: 100,
  },
  {
    title: '股東',
    width: 100,
  },
  {
    title: '首次充值(筆)',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleDepositModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '首次充值加總(元)',
    width: 140,
  },
  {
    title: '再次充值(筆)',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleDepositModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '再次充值加總(元)',
    render: (_, row) => '-',
    width: 140,
  },
  {
    title: '總充值(筆)',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleDepositModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '總充值加總(元)',
    width: 140,
    render: (_, row) => row.firstDepositTotal + row.onceAgainDepositTotal,
  },
  {
    title: '首次提現(筆)',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleWithdrawalModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '首次提現加總(元)',
    width: 140,
  },
  {
    title: '再次提現(筆)',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleWithdrawalModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '再次提現加總(元)',
    dataIndex: 'onceAgainWithdrawalTotal',
    width: 140,
  },
  {
    title: '總提現(筆)',
    dataIndex: 'withdrawalCount',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleWithdrawalModal(true))
      return <a onClick={onClick}>6</a>
    },
  },
  {
    title: '總提現加總(元)',
    dataIndex: 'withdrawalTotal',
    width: 140,
    render: (_, row) => row.firstWithdrawalTotal + row.onceAgainWithdrawalTotal,
  },
  {
    title: '總登入人數',
    dataIndex: 'loginCount',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleLoginCountModal(true))
      return <a onClick={onClick}>10</a>
    },
  },
  {
    title: '註冊人數',
    dataIndex: 'registerCount',
    width: 120,
    render: (_, row) => {
      const dispatch = useDispatch()
      const onClick = () => dispatch(toggleRegisterCountModal(true))
      return <a onClick={onClick}>13</a>
    },
  },
  {
    title: () => <IconLink icon={<FilterFilled />} />,
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    width: 40,
  },
]

const data = [...Array(50)].map((t, i) => ({
  id: i,
  account: 'aaaa(小白)',
  firstDepositCount: 5,
  firstDepositTotal: 20320,
  onceAgainDepositCount: 10,
  onceAgainDepositTotal: 41232,
  firstWithdrawalCount: 5,
  firstWithdrawalTotal: 20320,
  onceAgainWithdrawalCount: 10,
  onceAgainWithdrawalTotal: 41232,
  loginCount: 20,
  registerCount: 3,
}))
const TableData: React.FC = () => {
  return <TableSets columns={columns} data={data} />
}

export default TableData
