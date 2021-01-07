import { IconLink, PopupConfirm, TableSets } from '@/components'
import { DeleteOutlined, EditFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useEffect } from 'react'
import { PlaySetting } from '../API/types'
import { usePopupProvider } from '../context/PopupProvider'
import {
  selectPlayId,
  selectSectionId,
  selectTableData,
  useTypedSelector,
} from '../selectors'
import { useAPIService } from '../service'
import { checkWinSide, toOptionName } from '@/utils/transfer'
import { winSideTeamOpts } from '@/lib/options'

const columns: ColumnsType<PlaySetting> = [
  {
    title: '比分',
    width: 80,
    align: 'center',
    render: (_, row) => `${row.home_score}-${row.away_score}`,
  },
  {
    title: '獲利(%)',
    width: 80,
    render: (_, row) => row.odds,
  },
  {
    title: '可交易量',
    width: 120,
    render: (_, row) => row.bet_amount_limit,
  },
  {
    title: '自動降賠',
    width: 180,
    render: (_, row) => {
      if (row.is_auto_odds) {
        return `${row.auto_odds_amount_unit} 以上降 ${row.auto_odds_rate_unit}%`
      }
      return '-'
    },
  },
  {
    title: '單注上限',
    width: 120,
    render: (_, row) => row.single_bet_limit,
  },
  {
    title: '單注下限',
    width: 120,
    render: (_, row) => row.single_bet_least,
  },
  {
    title: '操作',
    render(_, row) {
      const [, setVisible] = usePopupProvider('editForm')
      const { getFormData, onDelete, changeActive } = useAPIService()
      const handleEdit = async (id: number) => {
        await getFormData(id)
        setVisible(true)
      }
      return (
        <Space size="small">
          <IconLink
            icon={<EditFilled />}
            label="編輯"
            onClick={() => handleEdit(row.id)}
          />
          <PopupConfirm onConfirm={() => onDelete(row.id)}>
            <IconLink icon={<DeleteOutlined />} label="刪除" />
          </PopupConfirm>
        </Space>
      )
    },
    width: 100,
  },
]

const TableData: React.FC = () => {
  const groupData = useTypedSelector(selectTableData)
  const { getTableData } = useAPIService()

  const play_id = useTypedSelector(selectPlayId)
  const section_id = useTypedSelector(selectSectionId)

  useEffect(() => {
    getTableData()
  }, [play_id, section_id])

  return (
    <>
      {Object.entries(groupData).map(([key, data], i) => (
        <div key={i}>
          <h3>{toOptionName(winSideTeamOpts, +key)}</h3>
          <TableSets columns={columns} data={data} scroll={{ x: 1000 }} />
        </div>
      ))}
    </>
  )
}

export default TableData
