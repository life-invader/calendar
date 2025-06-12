import { Calendar, Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { EventForm } from '@entities/forms';
import { useStore } from '@store/index';
// import type { IEvent } from '@shared/lib/types';
import '../style.pcss';

// interface IEventCalendarProps {
//   events?: IEvent[];
// }

export const EventCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchGuests = useStore((state) => state.fetchGuests);
  const guests = useStore((state) => state.guests);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <div className="eventCalendar">
      <Calendar />
      <Modal
        title="Создать собыйтие"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Отмена
          </Button>,
        ]}>
        <EventForm guests={guests} />
      </Modal>
      <Button onClick={toggleModal}>Добавить событие</Button>
    </div>
  );
};
