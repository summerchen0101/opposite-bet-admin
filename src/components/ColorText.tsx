import styled from 'styled-components'
type Props = {
  red?: boolean
  green?: boolean
  grey?: boolean
  large?: boolean
}

const ColorText = styled.span<Props>`
  color: ${(props) => {
    if (props.red) return '#cf1322'
    else if (props.green) return '#267e00'
    else if (props.grey) return '#777'
  }};
  font-size: ${(props) => props.large && '1.2em'};
`
export default ColorText
