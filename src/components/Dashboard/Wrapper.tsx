import styled from 'styled-components'
import { Layout } from 'antd'
export default styled(Layout)`
  height: 100vh;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .site-header {
    background: #fff;
    padding: 0;
    .logout {
      line-height: 64px;
      margin-right: 15px;
      margin-top: -2px;
    }
  }

  .site-content {
    margin: 15px;
    margin-top: 0;
    min-height: 280px;
    overflow-y: auto;
    background-color: #fff;
    padding: 15px;
  }
  .ant-layout-sider-children {
    overflow-y: auto;
  }
`
