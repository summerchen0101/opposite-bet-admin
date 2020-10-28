import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleCreateModal } from '../reducer';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onCreate = () => dispatch(toggleCreateModal(true));
  return (
    <Button style={{ float: 'right' }} onClick={onCreate}>
      新增
    </Button>
  );
};

export default Component;
