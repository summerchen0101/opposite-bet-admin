import React from 'react'
import styled from 'styled-components'

const Component = styled.b`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color || '#000'};
`

export default Component
