import { Button, DatePicker, Form, Input, Select, type FormProps } from 'antd';
import { eventActions } from '@entities/event';
import { formValidationRules } from '@shared/index';
import { formatUsersForSelect } from '../lib';
import type { ICreateNewEventProps, IEventFormFieldType } from '../model/types';

export const CreateNewEvent = ({
  guests,
  date,
  onFinish = () => {},
  form,
}: ICreateNewEventProps) => {
  const { createEvent } = eventActions;
  const guestsSelectOptions = formatUsersForSelect(guests);

  const formFinishHandler: FormProps<IEventFormFieldType>['onFinish'] = (values) => {
    createEvent(values);
    onFinish();
  };

  return (
    <Form
      form={form}
      className="eventForm"
      name="event"
      layout="vertical"
      scrollToFirstError={true}
      onFinish={formFinishHandler}
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
