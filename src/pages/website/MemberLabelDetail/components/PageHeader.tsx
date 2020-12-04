import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { MemberLabel as page, MemberLabelDetail } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page, [MemberLabelDetail])
  return <PageHeader title={page.name} breadcrumb={{ routes }} />
}

export default Component
