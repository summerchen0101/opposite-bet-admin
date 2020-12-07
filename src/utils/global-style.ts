import { createGlobalStyle } from 'styled-components'
import { blue } from '@ant-design/colors'

export default createGlobalStyle`
  label {
    margin-bottom: 0
  }
  .ant-form {
    h5 {
      margin-bottom: 15px;
    }
  }
  .bg-grey {
    background-color: #efefef
  }
  .ant-form-item {
    margin-bottom: 18px
  }
  .link {
    color: ${blue.primary}
  }
`
