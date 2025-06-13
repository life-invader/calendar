import dayjs from 'dayjs';
import type { IUser } from "@shared/lib/types";
import type { FormInstance, FormProps } from 'antd';

export interface ILoginFormFieldType {
  username: string;
  password: string;
}

export interface IEventFormFieldType {
  date: string;
  description: string;
  guests: string[];
}

export interface IEventFormProps {
  guests: IUser[];
  date: dayjs.Dayjs;
  form: FormInstance<IEventFormFieldType>;
  onFinish: FormProps<IEventFormFieldType>['onFinish'];
}