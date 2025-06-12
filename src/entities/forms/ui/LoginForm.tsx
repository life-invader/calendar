import { Button, Form, Input, type FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useStore } from '@store/index';
import { loginAction } from '@store/actions';
import { selectAuthErrorMsg, selectIsLoading } from '@store/selectors';
import { formValidationRules } from '../cfg';
import '../style.pcss';

interface IFieldType {
  username?: string;
  password?: string;
}

export const LoginForm = () => {
  const login = useStore(loginAction);
  const isLoading = useStore(selectIsLoading);
  const loginErrorMsg = useStore(selectAuthErrorMsg);

  const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
    login(values as Required<IFieldType>);
  };

  return (
    <Form
      className="form form--loginForm"
      name="loginForm"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}>
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

      {loginErrorMsg && <p className="form__submitResultMsg">{loginErrorMsg}</p>}
    </Form>
  );
};
