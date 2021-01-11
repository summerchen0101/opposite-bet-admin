import { PopupTable, Text } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Popover } from 'antd'
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
  const data = [...Array(10)].map((t, i) => ({ key: i }))

  const columns = [
    {
      title: '帐号 / 会员名称',
      render: (_, row) => 'qq13995774106 【秦小强】',
    },
    {
      title: '登入次數',
      render: (_, row) => 10,
    },
    {
      title: '最後登入',
      render: (_, row) => (
        <>
          2020-10-23 09:47:05
          <br />
          <Popover
            content={
              <>
                裝置：desktop <br />
                系統：windows <br />
                瀏覽器：chrome
              </>
            }
          >
            <a>149.222.22.111</a>
          </Popover>
        </>
      ),
    },
  ]
  return (
    <PopupModal
      visible={isDisplay}
      title="flower[廠商] 會員總登入人數"
      onCancel={onCancel}
      width={600}
    >
      <PopupTable data={data} columns={columns} />
    </PopupModal>
  )
}

export default PopupLoginCountTable
