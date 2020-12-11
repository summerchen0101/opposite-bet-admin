import styled from 'styled-components'
type Props = {
  red?: boolean
  green?: boolean
}

const ColorText = styled.span<Props>`
  ${(props) => props.red && `color: #cf1322`}
  ${(props) => props.green && `color: #267e00`}
`
export default ColorText
