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
  .bold {
    font-weight: bold
  }
  .mb-0 {
    margin-bottom: 0 !important
  }
  .mb-1 {
    margin-bottom: 7.5px !important
  }
  .mb-2 {
    margin-bottom: 15px !important
  }
  .mr-1 {
    margin-right: 7.5px !important
  }
  .mr-2 {
    margin-right: 15px !important
  }
  .mr-3 {
    margin-right: 22.5px !important
  }
  .ml-1 {
    margin-left: 7.5px !important
  }
  .ml-2 {
    margin-left: 15px !important
  }
  .ml-2 {
    margin-left: 15px !important
  }
  .float-right {
    float: right
  }
  .float-left {
    float: left
  }
  .d-inline-block {
    display: inline-block !important
  }
  .text-nowrap {
    white-space: nowrap
  }
  .text-center {
    text-align: center
  }
  .align-top {
    vertical-align: top
  }
  .d-flex {
    display: flex
  }
  .justify-content-between {
    justify-content: space-between
  }
  .w-100 {
    width: 100%
  }
  .h-100 {
    height: 100%
  }
  .text-primary {
    color: ${blue.primary}
  }
  .text-white {
    color: #fff
  }
  .text-default {
    color: rgba(0, 0, 0, 0.85);
    &:hover {
      color: rgba(0, 0, 0, 0.85);
    }
  }

  .ant-form-inline .ant-form-item {
    margin-bottom: 8px;
  }

  .row-dragging {
    background: #fafafa;
    border: 1px solid #ccc;
  }

  .row-dragging td {
    padding: 8px 15px;
    visibility: hidden;
  }

  .row-dragging .drag-visible {
    visibility: visible;
  }

`
