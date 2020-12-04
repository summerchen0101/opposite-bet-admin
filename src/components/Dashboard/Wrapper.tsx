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
    position: fixed;
    z-index: 1;
    width: calc(100% - 200px);
    .logout {
      margin-left: 20px;
    }
  }

  .site-content {
    /* background: #fff; */
    margin: 24px 16px;
    min-height: 280px;
    margin-top: 80px;
    overflow-y: auto;
    .page-content {
      background-color: #fff;
      padding: 15px;
    }
  }
  .ant-layout-sider-children {
    overflow-y: auto;
  }
`
