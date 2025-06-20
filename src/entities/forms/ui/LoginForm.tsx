import { Button, Form, Input, type FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { formValidationRules } from '@shared/index';
import { useAuthSlice } from '@shared/model/auth/authSlice';
import { selectErrorMsg, selectIsLoading, selectLoginAction } from '@shared/model/auth/selectors';
import type { ILoginFormFieldType } from '../cfg/types';

export const LoginForm = () => {
  const isLoading = useAuthSlice(selectIsLoading);
  const errorMsg = useAuthSlice(selectErrorMsg);
  const login = useAuthSlice(selectLoginAction);

  const onFinish: FormProps<ILoginFormFieldType>['onFinish'] = (values) => {
    login(values);
  };

  return (
    <Form
      className="form form--loginForm"
      name="loginForm"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}
      initialValues={{ username: 'emilys', password: 'emilyspass' }}>
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

      {errorMsg && <p className="form__submitResultMsg">{errorMsg}</p>}
    </Form>
  );
};
