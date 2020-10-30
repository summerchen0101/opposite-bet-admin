import React from 'react';
import { Space, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
`;

interface IProps {
  label: string;
  path: string;
}
const TabsRecordItem: React.FC<IProps> = ({ label, path }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(path);
  };
  return (
    <ButtonWrapper onClick={onClick}>
      {label} <CloseCircleOutlined />
    </ButtonWrapper>
  );
};

export default TabsRecordItem;
