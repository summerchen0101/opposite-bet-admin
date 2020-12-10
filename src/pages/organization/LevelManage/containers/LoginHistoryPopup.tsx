import { IconLink, PopupConfirm, PopupModal, Text } from '@/components'
import Form, { FormField } from '@/components/Form'
import { LevelCode } from '@/lib/enums'
import { addKeyToArrayItem, getParentLevelCodes } from '@/utils/transfer'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Form as AntForm, Input, Space, Table } from 'antd'
import React from 'react'
import { useLevelProvider } from '../context/LevelProvider'
import { usePopupProvider } from '../context/PopupProvider'

const LoginHistoryPopup: React.FC = () => {
  const { currentLevel } = useLevelProvider()
  const [visible, setVisible] = usePopupProvider('loginHistory')
  const [form] = AntForm.useForm()

  const columns = [
    {
      title: '加盟商',
      render: (_, row) => '-',
    },
    {
      title: '代理',
      render: (_, row) => '-',
    },
    {
      title: 'IP',
      render: (_, row) => '0.0.0.0',
    },
    {
      title: '系統 / 瀏覽器',
      render: (_, row) => '-',
    },
    {
      title: '狀態',
      render: (_, row) => <Text color="success">成功</Text>,
    },
    {
      title: '國家',
      render: (_, row) => '-',
    },
    {
      title: '登入時間',
      render: (_, row) => '2020-12-12 10:49',
    },
  ]
  const data = [...Array(10)]
  const parents = getParentLevelCodes(currentLevel)
  return (
    <PopupModal
      visible={visible}
      onCancel={() => setVisible(false)}
      title="登入歷程"
      width={800}
    >
      <Form form={form}>
        {currentLevel !== LevelCode.Vendor && (
          <FormField label="組織層級">
            {parents.map((code, i) => {
              return (
                <span key={code}>
                  <span>abCC1xx</span>
                  {i < parents.length - 1 && ' / '}
                </span>
              )
            })}
          </FormField>
        )}

        <FormField>
          <Table
            dataSource={addKeyToArrayItem(data)}
            columns={addKeyToArrayItem(columns)}
            size="small"
            bordered
            pagination={{ pageSize: 8 }}
          />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default LoginHistoryPopup
