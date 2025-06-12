import { Button, Form, Input, type FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useStore } from '@store/index';
import { formValidationRules } from '../cfg';
import '../style.pcss';

interface IFieldType {
  username?: string;
  password?: string;
}

export const LoginForm = () => {
  const login = useStore((state) => state.login);
  const isLoading = useStore((state) => state.isLoading);

  const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
    login(values as Required<IFieldType>);
  };

  const onFinishFailed: FormProps<IFieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="loginForm"
      name="login"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item name="username" rules={[formValidationRules.required]}>
        <Input prefix={<UserOutlined />} placeholder="Логин" />
      </Form.Item>

      <Form.Item name="password" rules={[formValidationRules.required]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit" loading={isLoading}>
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
