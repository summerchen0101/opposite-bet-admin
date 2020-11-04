import styled from 'styled-components'
import React from 'react'

const ColorText = styled.span<{ color?: string }>`
  ${(props) => props.color && `color: ${props.color}`};
`

const RateText: React.FC = ({ children }) => {
  if (children > 0) {
    return <ColorText color="green">+{children}%</ColorText>
  } else if (children < 0) {
    return <ColorText color="red">{children}%</ColorText>
  }
  return <ColorText>{children}</ColorText>
}

export default RateText
