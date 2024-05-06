import { AccountTypeEnum } from '../enums';
import { BaseColumnsType } from './base.columns.interface';

export type BaseAccountType = {
  id?: number;
  username: string;
  mobile?: string;
  email?: string;
  type?: AccountTypeEnum;
  status?: number;
  isSuper?: boolean;
  platform?: number;
  openid?: string;
};

export type UserInfoType = BaseAccountType & {
  nickname?: string;
  name?: string;
  avatar?: string;
  wechat?: string;
  wechatUid?: string;
  gender?: number;
  age?: number;
  wechatOpenid?: string;
} & BaseColumnsType;
