import dayjs from 'dayjs';
import { Calendar, Button, Modal, Form } from 'antd';
import { useEffect, useState } from 'react';
import { EventForm } from '@entities/forms';
import { useStore } from '@store/index';
import { createEventAction, fetchEventsAction, fetchGuestsAction } from '@store/actions';
import { selectEvents, selectGuests } from '@store/selectors';
import { dateCellRender } from '../lib';
import type { CalendarProps, FormProps } from 'antd';
import type { IEventFormFieldType } from '@entities/forms/cfg/types';
import '../style.pcss';

export const EventCalendar = () => {
  // actions
  const createEvent = useStore(createEventAction);
  const fetchGuests = useStore(fetchGuestsAction);
  const fetchEvents = useStore(fetchEventsAction);

  // state
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarDate] = useState<dayjs.Dayjs>(dayjs);
  const guests = useStore(selectGuests);
  const events = useStore(selectEvents);

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

  const onEventFormFinish: FormProps<IEventFormFieldType>['onFinish'] = (values) => {
    createEvent(values);
    form.resetFields();
    closeModal();
  };

  const cellRender: CalendarProps<dayjs.Dayjs>['cellRender'] = (date) => {
    return dateCellRender(date, events);
  };

  useEffect(() => {
    fetchGuests();
    fetchEvents();
  }, [fetchGuests, fetchEvents]);

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
        <EventForm form={form} guests={guests} date={calendarDate} onFinish={onEventFormFinish} />
      </Modal>

      <Button onClick={openModal}>Добавить событие</Button>
    </div>
  );
};
