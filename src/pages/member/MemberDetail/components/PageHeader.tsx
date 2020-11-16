import PageHeader from '@/components/PageHeader'
import { MemberManage as page, MemberDetail } from '@/pages/member/routes'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page, [MemberDetail])
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
