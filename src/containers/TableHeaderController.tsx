import { BatchOpperatorDropdown, IconLink } from '@/components'
import { useTableSelectAll } from '@/utils/hooks/usetTableSelector'
import { FilterFilled } from '@ant-design/icons'
import { Checkbox, Space } from 'antd'
import React from 'react'

const TableHeaderController: React.FC<{ data: any[] }> = ({ data }) => {
  const { handleSelectAll } = useTableSelectAll(data)
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
