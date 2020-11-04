import styled from 'styled-components'
type Props = {
  height?: number
}
export default styled.div<Props>`
  margin-bottom: ${(props) => props.height | 30}px;
`
