import PageHeader from '@/components/PageHeader'
import {
  MemberLabel as page,
  MemberLabelDetail,
} from '@/pages/organization/routes'
import { useBreadcrumb } from '@/utils/hooks'
import React from 'react'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page, [MemberLabelDetail])
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
