import styled from 'styled-components'

export default styled.p<{ withStartIcon?: boolean }>`
  margin-bottom: 0;
  color: #666;
  ${({ withStartIcon }) =>
    withStartIcon &&
    `
    text-indent: -15px;
    margin-left: 15px;
  `}
`
