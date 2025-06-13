import { Button, Form, Input, Select, DatePicker } from 'antd';
import { formValidationRules } from '../cfg';
import { formatUsersForSelect } from '../lib';
import type { IEventFormProps } from '../cfg/types';
import '../style.pcss';

export const EventForm = ({ guests, date, onFinish, form }: IEventFormProps) => {
  const guestsSelectOptions = formatUsersForSelect(guests);

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
        <Select mode="multiple" options={guestsSelectOptions} />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};
