import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleDepositModal } from '../reducer'
import { selectDisplayDepositModal, useTypedSelector } from '../selectors'
const PopupDepositTable: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayDepositModal)
  const onCancel = () => {
    dispatch(toggleDepositModal(false))
  }
  const data = [...Array(30)].map((t, i) => ({ key: i }))

  const columns = [
    {
      title: '帐号 / 会员名称',
      dataIndex: 'name',
      key: 'name',
      render: () => 'qq13995774106 【秦小强】',
    },
    {
      title: '交易类型',
      dataIndex: 'age',
      key: 'age',
      render: () => '第三方存款',
    },
    {
      title: '金额',
      dataIndex: 'address',
      key: 'address',
      render: () => '1,000',
    },
    {
      title: '完成时间',
      dataIndex: 'address',
      key: 'address',
      render: () => '2020-10-23 09:47:05',
    },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="充值"
      onCancel={onCancel}
      width={800}
    >
      <PopupTable data={data} columns={columns} />
    </PopupModal>
  )
}

export default PopupDepositTable
