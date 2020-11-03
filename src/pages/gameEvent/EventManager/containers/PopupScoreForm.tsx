import PopupModal from '@/components/PopupModal';
import { Button, Input, Select, Space } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleScoreModal } from '../reducer';
import { selectDisplayScoreModal, useTypedSelector } from '../selectors';
import Form, { FormField } from '@/components/Form';
const { Option } = Select;
const ScoreForm: React.FC = () => {
  const dispatch = useDispatch();
  const isDisplay = useTypedSelector(selectDisplayScoreModal);
  const onCancel = () => {
    dispatch(toggleScoreModal(false));
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(toggleScoreModal(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <PopupModal visible={isDisplay} title="添加結果">
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="總結果" name="result" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">比賽已完成</Option>
            <Option value="opt2">比賽已撤銷</Option>
          </Select>
        </FormField>
        <FormField label="全場波膽" name="full" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">3:1</Option>
            <Option value="opt2">3:2</Option>
          </Select>
        </FormField>
        <FormField label="上半場波膽" name="firstHalf" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">3:1</Option>
            <Option value="opt2">3:2</Option>
          </Select>
        </FormField>
        <FormField label="進球總數" name="total" required>
          <Input type="number" />
        </FormField>
        <FormField>
          <p>＊如果上面結果為撤銷則不用選擇</p>
        </FormField>

        <FormField style={{ textAlign: 'right' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  );
};

export default ScoreForm;
