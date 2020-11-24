import { BatchOpperatorDropdown, IconLink } from '@/components'
import { TableContext } from '@/contexts/TableContextProvider'
import { FilterFilled } from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import React, { useContext } from 'react'
// import { selectTableData, useTypedSelector } from '../selectors'

const TableHeaderController: React.FC<{ data: any[] }> = ({ data }) => {
  const { selectAll, unselectAll } = useContext(TableContext)
  const handleSelectAll = (check) =>
    check ? selectAll(data.map((t) => t.id)) : unselectAll()
  return (
    <>
      <Space size="small">
        <Checkbox
          defaultChecked={false}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <BatchOpperatorDropdown
          options={[
            { label: '批量刪除', onClick: () => {} },
            { label: '批量開放', onClick: () => {} },
          ]}
        />
      </Space>
      <IconLink
        icon={<FilterFilled />}
        style={{ float: 'right', marginBottom: -4 }}
      />
    </>
  )
}
export default TableHeaderController
