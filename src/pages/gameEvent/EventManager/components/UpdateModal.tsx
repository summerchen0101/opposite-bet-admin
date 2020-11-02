import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplayUpdateModal } from '../selectors';
import UpdateForm from './UpdateForm';

const CreateModal: React.FC = () => {
  const visible = useSelector(selectDisplayUpdateModal);
  return (
    <Modal
      title="修改帳號"
      visible={visible}
      footer={null}
      destroyOnClose
      closable={false}
    >
      <UpdateForm />
    </Modal>
  );
};
export default CreateModal;
