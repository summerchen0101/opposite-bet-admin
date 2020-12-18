import React from 'react'
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc'
import { MenuOutlined } from '@ant-design/icons'
import arrayMove from 'array-move'
import styled from 'styled-components'

export const DragHandler = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
))

export const SortableItem = SortableElement((props) => <tr {...props} />)
export const SortableWrapper = SortableContainer((props) => (
  <tbody {...props} />
))

export default DragHandler
