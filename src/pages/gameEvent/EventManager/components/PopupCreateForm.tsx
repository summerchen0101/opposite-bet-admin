import React from 'react';
import { Form, Input, Button, Switch, Select, Space, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCreateModal } from '../reducer';
import PopupModal from '@/components/PopupModal';
import { selectDisplayCreateModal, useTypedSelector } from '../selectors';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const CreateForm: React.FC = () => {
  const dispatch = useDispatch();
  const isDisplay = useTypedSelector(selectDisplayCreateModal);
  const [form] = Form.useForm();
  const onCancel = () => {
    dispatch(toggleCreateModal(false));
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(toggleCreateModal(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <PopupModal visible={isDisplay} title="新增賽事">
      <Form
        {...layout}
        name="basic"
        form={form}
        labelAlign="left"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="請選擇隊伍(主)" name="mainTeam" required>
          <Input />
        </Form.Item>
        <Form.Item label="請選擇隊伍" name="clientTeam" required>
          <Input />
        </Form.Item>
        <Form.Item label="國家" name="branch" rules={[{ required: true }]}>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">巴西</Option>
            <Option value="opt2">美國</Option>
          </Select>
        </Form.Item>
        <Form.Item label="請選擇聯盟" name="league" required>
          <Input />
        </Form.Item>
        <Form.Item label="開賽時間" name="startAt" required>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <p>＊如果上面結果為撤銷則不用選擇</p>
        </Form.Item>

        <Form.Item style={{ textAlign: 'right' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </PopupModal>
  );
};

export default CreateForm;
