import dayjs from 'dayjs';
import { Calendar, Button, Modal, Form } from 'antd';
import { useEffect, useState } from 'react';
import { CreateNewEventForm } from '@features/event';
import { eventSelectors, eventActions, useEventSlice } from '@entities/event';
import { useUserSlice, userSelectors, userActions } from '@entities/user';
import { dateCellRender } from '../lib';
import type { CalendarProps } from 'antd';
import '../style.pcss';

export const EventCalendar = () => {
  // actions
  const { fetchEvents } = eventActions;
  const { fetchUsers } = userActions;

  // state
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarDate] = useState<dayjs.Dayjs>(dayjs);

  const guests = useUserSlice(userSelectors.selectEvents);
  const events = useEventSlice(eventSelectors.selectEvents);

  // handlers
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const dateChangeHandler = (date: dayjs.Dayjs) => {
    form.setFieldsValue({ date: date });
  };

  const onEventFormFinish = () => {
    form.resetFields();
    closeModal();
  };

  const cellRender: CalendarProps<dayjs.Dayjs>['cellRender'] = (date) => {
    return dateCellRender(date, events);
  };

  useEffect(() => {
    fetchEvents();
    fetchUsers();
  }, [fetchEvents, fetchUsers]);

  return (
    <div className={'eventCalendar'}>
      <Calendar onChange={dateChangeHandler} cellRender={cellRender} />

      <Modal
        title={'Создать событие'}
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key={'back'} onClick={closeModal}>
            Отмена
          </Button>,
        ]}>
        <CreateNewEventForm
          form={form}
          guests={guests}
          date={calendarDate}
          onFinish={onEventFormFinish}
        />
      </Modal>

      <Button onClick={openModal}>Добавить событие</Button>
    </div>
  );
};
