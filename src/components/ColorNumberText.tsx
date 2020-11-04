import styled from 'styled-components'
import NumberText from './NumberText'
export default styled(NumberText)`
  ${(props) => props.children > 0 && 'color: green'};
  ${(props) => props.children < 0 && 'color: red'};
`
