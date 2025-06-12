import { Calendar, Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { EventForm } from '@entities/forms';
import { useStore } from '@store/index';
import { fetchGuestsAction } from '@store/actions';
import { selectGuests } from '@store/selectors';
import '../style.pcss';

export const EventCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fetchGuests = useStore(fetchGuestsAction);
  const guests = useStore(selectGuests);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  return (
    <div className={'eventCalendar'}>
      <Calendar />

      <Modal
        title={'Создать собыйтие'}
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key={'back'} onClick={closeModal}>
            Отмена
          </Button>,
        ]}>
        <EventForm guests={guests} />
      </Modal>

      <Button onClick={openModal}>Добавить событие</Button>
    </div>
  );
};
