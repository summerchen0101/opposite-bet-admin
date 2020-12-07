import { PopupTable, Text } from '@/components'
import PopupModal from '@/components/PopupModal'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleLoginCountModal } from '../reducer'
import { selectDisplayLoginCountModal, useTypedSelector } from '../selectors'
const PopupLoginCountTable: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayLoginCountModal)
  const onCancel = () => {
    dispatch(toggleLoginCountModal(false))
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
      title: 'IP',
      dataIndex: 'age',
      key: 'age',
      render: (_, row) => '0,0,0,0',
    },
    {
      title: '系統 / 瀏覽器',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => 'window / chrome',
    },
    {
      title: '狀態',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => <Text color="success">成功</Text>,
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
      title="登入人數"
      onCancel={onCancel}
      width={800}
    >
      <PopupTable data={data} columns={columns} />
    </PopupModal>
  )
}

export default PopupLoginCountTable
