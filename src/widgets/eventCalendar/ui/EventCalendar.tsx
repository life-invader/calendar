import dayjs from 'dayjs';
import { Calendar, Button, Modal, Form } from 'antd';
import { useEffect, useState } from 'react';
import { EventForm } from '@entities/forms';
import { useStore } from '@store/index';
import { createEventAction, fetchGuestsAction } from '@store/actions';
import { selectGuests } from '@store/selectors';
import type { FormProps } from 'antd';
import type { IEventFormFieldType } from '@entities/forms/cfg/types';
import '../style.pcss';

// const getListData = (value: Dayjs) => {
//   let listData: { type: string; content: string }[] = []; // Specify the type of listData
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//       ];
//       break;
//     case 10:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ];
//       break;
//     case 15:
//       listData = [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'success', content: 'This is very long usual event......' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// };

export const EventCalendar = () => {
  // actions
  const createEvent = useStore(createEventAction);
  const fetchGuests = useStore(fetchGuestsAction);

  // state
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState<dayjs.Dayjs>(dayjs);

  // etc
  const guests = useStore(selectGuests);

  // const dateCellRender = (value: Dayjs) => {
  //   const listData = getListData(value);

  //   return (
  //     <ul className="events">
  //       {listData.map((item) => (
  //         <li key={item.content}>
  //           <Badge status={item.type as BadgeProps['status']} text={item.content} />
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  // const cellRender: CalendarProps<Dayjs>['cellRender'] = (current) => {
  //   return dateCellRender(current);
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const dateChangeHandler = (date: dayjs.Dayjs) => {
    setCalendarDate(date);
    form.setFieldValue('date', date);
  };

  const onEventFormFinish: FormProps<IEventFormFieldType>['onFinish'] = (values) => {
    createEvent(values);
    form.resetFields();
  };

  useEffect(() => {
    fetchGuests();
  }, [fetchGuests]);

  return (
    <div className={'eventCalendar'}>
      {/* <Calendar defaultValue={defaultDate} onChange={dateChangeHandler} cellRender={cellRender} /> */}
      <Calendar defaultValue={calendarDate} onChange={dateChangeHandler} />

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
