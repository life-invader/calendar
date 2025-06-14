import dayjs from 'dayjs';
import { Badge } from 'antd';
import type { BadgeProps } from 'antd';
import type { IEvent } from '@shared/lib/types';

const getListData = (value: dayjs.Dayjs, events: IEvent[]) => {
  const filteredEvents = events.filter((event) => event.date === value.format('YYYY-MM-DD'));
  return filteredEvents;
};

export const dateCellRender = (value: dayjs.Dayjs, events: IEvent[]) => {
  const listData = getListData(value, events);

  return (
    <ul className="events">
      {listData.map((item, index) => (
        <li key={index}>
          <Badge status={'success' as BadgeProps['status']} text={item.description} />
        </li>
      ))}
    </ul>
  );
};
