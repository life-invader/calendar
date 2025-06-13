import { Button, Form, Input, Select, DatePicker, type FormProps } from 'antd';
import { formValidationRules } from '../cfg';
import { useState } from 'react';
import type { IEvent } from '@shared/lib/types';
import type { IUser } from '@store/authSlice/types';
import '../style.pcss';
import dayjs from 'dayjs';

interface IEventFormProps {
  guests: IUser[];
}

interface IFieldType {
  username?: string;
  password?: string;
}

export const EventForm = ({ guests }: IEventFormProps) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guests: [],
  });

  const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
    console.log(values);
  };

  const selectChangeHandler = (value: string[]) => {
    setEvent({ ...event, guests: value });
  };

  return (
    <Form
      className="eventForm"
      name="event"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}
      initialValues={{ date: dayjs('2015-06-06', 'YYYY-MM-DD') }}>
      <Form.Item label="Дата события" name={'date'} rules={[formValidationRules.required]}>
        <DatePicker disabled={true} name={'date'} format={'YYYY-MM-DD'} />
      </Form.Item>

      <Form.Item label="Описание события" name="description" rules={[formValidationRules.required]}>
        <Input name={'description'} placeholder="Описание события" />
      </Form.Item>

      <Form.Item label="Гости события" name="guests" rules={[formValidationRules.required]}>
        <Select
          mode="multiple"
          onChange={selectChangeHandler}
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
