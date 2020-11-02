import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleCreateModal } from '../reducer';
import { FormattedMessage } from 'react-intl';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onCreate = () => dispatch(toggleCreateModal(true));
  return (
    <Button style={{ float: 'right' }} onClick={onCreate}>
      <FormattedMessage id="button.add" defaultMessage="新增" />
    </Button>
  );
};

export default Component;
