import React from 'react';
import { Form, Input, Button, Switch, Select, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { toggleCreateModal } from '../reducer';
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const CreateForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
    }
  };
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
    <Form
      {...layout}
      name="basic"
      form={form}
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="站台" name="branch" rules={[{ required: true }]}>
        <Select placeholder="請選擇" onChange={onGenderChange} allowClear>
          <Option value="all">全部站台</Option>
          <Option value="branch1">站台一</Option>
          <Option value="branch2">站台二</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="帳號"
        name="account"
        rules={[{ required: true, message: '帳號為必填' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密碼"
        name="password"
        rules={[{ required: true, message: '密碼為必填' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="確認密碼"
        name="passwordConfirm"
        rules={[{ required: true, message: '確認密碼為必填' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="狀態" name="status" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item
        label="暱稱"
        name="nick"
        rules={[{ required: true, message: '暱稱為必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="角色"
        name="role"
        rules={[{ required: true, message: '角色為必填' }]}
      >
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="請選擇"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="role1">總代理</Option>
          <Option value="role2">代理</Option>
        </Select>
      </Form.Item>

      <Form.Item style={{ textAlign: 'right' }}>
        <Space>
          <Button type="primary" htmlType="submit">
            確認
          </Button>
          <Button onClick={onCancel} htmlType="reset">
            取消
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
