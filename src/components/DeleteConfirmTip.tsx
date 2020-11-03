import { Popconfirm } from 'antd';
import React from 'react';

interface DeleteConfirmBtnState {
  title?: string;
  onConfirm?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onCancel?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const DeleteConfirmBtn: React.FC<DeleteConfirmBtnState> = ({
  title = '請確認是否要刪除?請按下是進行刪除程序',
  onConfirm,
  onCancel,
  children,
}) => {
  return (
    <Popconfirm title={title} onConfirm={onConfirm} onCancel={onCancel}>
      {children}
    </Popconfirm>
  );
};

export default DeleteConfirmBtn;
