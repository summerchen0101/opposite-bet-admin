import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleWithdrawalModal } from '../reducer'
import { selectDisplayWithdrawalModal, useTypedSelector } from '../selectors'
const PopupWithdrawalTable: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayWithdrawalModal)
  const onCancel = () => {
    dispatch(toggleWithdrawalModal(false))
  }
  const data = [...Array(30)].map((t, i) => ({ key: i }))

  const columns = [
    {
      title: '帐号 / 会员名称',
      dataIndex: 'name',
      key: 'name',
      render: (_, row) => 'qq13995774106 【秦小强】',
    },
    {
      title: '手续费',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      render: (_, row) => '10',
    },
    {
      title: '金额',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => '1,000',
    },
    {
      title: '完成时间',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => '2020-10-23 09:47:05',
    },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="提現"
      onCancel={onCancel}
      width={800}
    >
      <PopupTable data={data} columns={columns} />
    </PopupModal>
  )
}

export default PopupWithdrawalTable
