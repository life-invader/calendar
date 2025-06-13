import { Button, Form, Input, Select, DatePicker, type FormProps } from 'antd';
import { formValidationRules } from '../cfg';
import { useLayoutEffect, useState } from 'react';
import dayjs from 'dayjs';
import type { IEvent } from '@shared/lib/types';
import type { IUser } from '@store/authSlice/types';
import '../style.pcss';
import { useStore } from '@store/index';
import { createEventAction } from '@store/actions';

interface IEventFormProps {
  guests: IUser[];
  date: dayjs.Dayjs | null;
}

interface IFieldType {
  username?: string;
  password?: string;
}

export const EventForm = ({ guests, date }: IEventFormProps) => {
  const [form] = Form.useForm();
  const createEvent = useStore(createEventAction);
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guests: [],
  });

  const onFinish: FormProps<IFieldType>['onFinish'] = (values) => {
    createEvent(values);
    form.resetFields();
  };

  const selectChangeHandler = (value: string[]) => {
    setEvent({ ...event, guests: value });
  };

  useLayoutEffect(() => {
    form.setFieldValue('date', date);
  }, [form, date]);

  return (
    <Form
      form={form}
      className="eventForm"
      name="event"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={onFinish}
      initialValues={{ date: date }}>
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
          options={guests.map((guest) => ({
            value: guest.id,
            label: `${guest.firstName} ${guest.lastName}`,
          }))}
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
