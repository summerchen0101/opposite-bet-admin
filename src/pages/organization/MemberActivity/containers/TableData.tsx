import IconLink from '@/components/IconLink'
import TableSets from '@/components/TableSets'
import {
  toggleDepositModal,
  toggleLoginCountModal,
  toggleRegisterCountModal,
  toggleWithdrawalModal,
} from '../reducer'
import { FilterFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const generateColumns = (level, setLevel) => {
  const columns = [
    {
      title: level === 0 ? '股東' : '總代理',
      width: 150,
      render: (_, row) => {
        if (level === 0) {
          return <a onClick={() => setLevel(1)}>flower[小花]</a>
        } else {
          return <a>jojo[JO]</a>
        }
      },
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
      render: (_, row) => '-',
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
      render: (_, row) => '-',
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
      width: 140,
      render: (_, row) => '-',
    },
    {
      title: '總提現(筆)',
      width: 120,
      render: (_, row) => {
        const dispatch = useDispatch()
        const onClick = () => dispatch(toggleWithdrawalModal(true))
        return <a onClick={onClick}>6</a>
      },
    },
    {
      title: '總提現加總(元)',
      width: 140,
      render: (_, row) =>
        row.firstWithdrawalTotal + row.onceAgainWithdrawalTotal,
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

  return columns
}

const data = [...Array(5)].map((t, i) => ({
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
  const [level, setLevel] = useState(0)
  return <TableSets columns={generateColumns(level, setLevel)} data={data} />
}

export default TableData
