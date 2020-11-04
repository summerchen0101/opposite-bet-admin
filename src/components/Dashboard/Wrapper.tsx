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

  .logo {
    height: 32px;
    font-size: 20px;
    color: #fff;
    margin: 16px;
    text-align: center;
  }

  .site-header {
    background: #fff;
    padding: 0;
    position: fixed;
    z-index: 1;
    width: 100%;
  }

  .site-content {
    background: #fff;
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
    margin-top: 80px;
    overflow-y: auto;
  }
`
