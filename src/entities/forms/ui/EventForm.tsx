import { Button, Form, Input, Select, type FormProps } from 'antd';
import { formValidationRules } from '../cfg';
import type { IUser } from '@store/authSlice/types';
import '../style.pcss';

interface IEventFormProps {
  guests: IUser[];
}

interface IFieldType {
  username?: string;
  password?: string;
}

export const EventForm = ({ guests }: IEventFormProps) => {
  const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
    console.log(values);
  };

  return (
    <Form
      className="eventForm"
      name="login"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}>
      <Form.Item label="Описание события" name="description" rules={[formValidationRules.required]}>
        <Input placeholder="Описание события" />
      </Form.Item>

      <Form.Item label="Гости события" name="guests" rules={[formValidationRules.required]}>
        <Select
          mode="multiple"
          options={guests.map((guest) => ({ value: guest.username, label: guest.name }))}
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};
