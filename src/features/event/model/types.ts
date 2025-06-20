import type dayjs from "dayjs";
import type { IUser } from "@shared/index";
import type { FormInstance } from "antd";

export interface IEventFormFieldType {
  date: dayjs.Dayjs;
  description: string;
  guests: string[];
}

export interface ICreateNewEventProps {
  guests: IUser[];
  date: dayjs.Dayjs;
  form: FormInstance<IEventFormFieldType>;
  onFinish?: () => void;
}