import { Button, Form, Input, type FormProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useStore } from '@store/index';
import { formValidationRules } from '../cfg';
import { useShallow } from 'zustand/shallow';
import { authSliceSelector } from '../cfg/storeSelectors';
import type { ILoginFormFieldType } from '../cfg/types';
import '../style.pcss';

export const LoginForm = () => {
  const { isLoading, login, loginErrorMsg } = useStore(useShallow(authSliceSelector));

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

      {loginErrorMsg && <p className="form__submitResultMsg">{loginErrorMsg}</p>}
    </Form>
  );
};
