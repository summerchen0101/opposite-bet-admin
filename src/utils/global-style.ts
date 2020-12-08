import { createGlobalStyle } from 'styled-components'
import { blue } from '@ant-design/colors'

export default createGlobalStyle`
  label {
    margin-bottom: 0
  }
  .ant-form {
    h3 {
      margin-bottom: 15px;
    }
  }
  .bg-grey {
    background-color: #efefef
  }
  .ant-form-item {
    margin-bottom: 18px
  }
  .mb-1 {
    margin-bottom: 7.5px !important
  }
  .mb-2 {
    margin-bottom: 15px !important
  }
  .mr-2 {
    margin-right: 15px !important
  }
  .mb-0 {
    margin-bottom: 0 !important
  }
  .float-right {
    float: right
  }

`
