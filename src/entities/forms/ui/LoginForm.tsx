import { Button, Form, Input, type FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { formValidationRules } from '../cfg';
import '../style.pcss';

interface IFieldType {
  username?: string;
  password?: string;
}

const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<IFieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export const LoginForm = () => {
  return (
    <Form
      name="login"
      layout="vertical"
      className="loginForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item name="username" rules={[formValidationRules.required]}>
        <Input prefix={<UserOutlined />} placeholder="Имя" />
      </Form.Item>

      <Form.Item name="password" rules={[formValidationRules.required]}>
        <Input prefix={<LockOutlined />} type="Пароль" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
