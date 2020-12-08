import { PopupTable } from '@/components'
import PopupModal from '@/components/PopupModal'
import { Popover } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleRegisterCountModal } from '../reducer'
import { selectDisplayRegisterCountModal, useTypedSelector } from '../selectors'
const PopupRegisterCountTable: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayRegisterCountModal)
  const onCancel = () => {
    dispatch(toggleRegisterCountModal(false))
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
      title: '角色',
      dataIndex: 'age',
      key: 'age',
      render: (_, row) => '第三方存款',
    },
    {
      title: '標籤',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => '-',
    },
    {
      title: '登入时间',
      dataIndex: 'address',
      key: 'address',
      render: (_, row) => (
        <>
          2020-10-23 09:47:05
          <br />
          IP：
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
      title="註冊人數"
      onCancel={onCancel}
      width={800}
    >
      <PopupTable data={data} columns={columns} />
    </PopupModal>
  )
}

export default PopupRegisterCountTable
