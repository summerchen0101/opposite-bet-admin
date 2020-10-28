import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayCreateModal } from '../selectors';
import { toggleCreateModal } from '../reducer';
import CreateFrom from './CreateForm';

const CreateModal: React.FC = () => {
  const visible = useSelector(selectDisplayCreateModal);
  return (
    <Modal
      title="新增帳號"
      visible={visible}
      footer={null}
      destroyOnClose
      closable={false}
    >
      <CreateFrom />
    </Modal>
  );
};
export default CreateModal;
