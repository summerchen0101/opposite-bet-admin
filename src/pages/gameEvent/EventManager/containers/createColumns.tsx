import {
  IconLink,
  PopoverEditor,
  PopupModalWithTrigger,
  Text,
} from '@/components'
import PopupConfirm from '@/components/PopupConfirm'
import TableHeaderController from '@/containers/TableHeaderController'
import { EventScore } from '@/pages/gameEvent/routes'
import { ColumnsGenerator } from '@/types'
import { useTableSelect } from '@/utils/hooks/usetTableSelector'
import {
  ContainerOutlined,
  DeleteOutlined,
  EyeOutlined,
  RotateLeftOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import ScoreForm from './ScoreForm'
import { TableItem } from './TableData'

export const createColumns: ColumnsGenerator<TableItem> = (data) => {
  return [
    {
      title: '賽事編號',
      dataIndex: 'eventId',
      width: '10%',
    },
    {
      title: '開賽時間',
      dataIndex: 'startAt',
    },
    {
      title: '隊名',
      dataIndex: 'teams',
      render(teams) {
        if (!teams) return '-'
        return (
          <>
            <PopoverEditor value={teams[0]}>
              <a>{teams[0]}</a>
            </PopoverEditor>
            <br />
            <PopoverEditor value={teams[1]}>
              <a>{teams[1]}</a>
            </PopoverEditor>
          </>
        )
      },
    },
    {
      title: '聯盟',
      dataIndex: 'league',
      render(value, row) {
        return (
          <PopoverEditor value={value}>
            <a>{value}</a>
          </PopoverEditor>
        )
      },
    },
    {
      title: '國家',
      dataIndex: 'country',
      render(value, row) {
        const options = [
          { label: '巴西', value: 'opt1' },
          { label: '美國', value: 'opt2' },
        ]
        return (
          <PopoverEditor value={value} options={options}>
            <a>{value}</a>
          </PopoverEditor>
        )
      },
    },
    {
      title: '筆數/實貨量',
      dataIndex: 'count',
      render(count, row) {
        return `${count}/${row.volume}`
      },
    },
    {
      title: '已開賽',
      dataIndex: 'isOpened',
      render: (isOpened) => <Text color="success">是</Text>,
      width: '80px',
    },
    {
      title: '結果',
      dataIndex: 'result',
      render: (result) => {
        if (!result) {
          return (
            <PopupModalWithTrigger
              title="添加結果"
              trigger={(setVisible) => (
                <a onClick={() => setVisible(true)}>
                  點擊添加
                </a>
              )}
              content={(setVisible) => <ScoreForm setVisible={setVisible} />}
            />
          )
        }
        return (
          <>
            <span>全場波膽: {result.full}</span>
            <br />
            <span>上半波膽: {result.firstHalf}</span>
          </>
        )
      },
    },
    {
      title: <TableHeaderController data={data} />,
      key: 'control',
      fixed: ('right' as unknown) as boolean,
      render: (_, row) => {
        const history = useHistory()
        const { handleSelect, isSelected } = useTableSelect(row.id)
        return (
          <>
            <Checkbox
              checked={isSelected}
              onChange={(e) => handleSelect(e.target.checked)}
            />
            <Space size="small" style={{ float: 'right' }}>
              <IconLink label="下架賽事" icon={<StopOutlined />} />
              <IconLink label="查看投注" icon={<EyeOutlined />} />
              <IconLink label="重置比分" icon={<RotateLeftOutlined />} />
              <IconLink
                label="比分"
                icon={<ContainerOutlined />}
                onClick={() => history.push(EventScore.path)}
              />
              <PopupConfirm>
                <IconLink icon={<DeleteOutlined />} />
              </PopupConfirm>
            </Space>
          </>
        )
      },
      width: '170px',
    },
  ]
}
