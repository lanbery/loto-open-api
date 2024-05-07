import { ILoginUser } from 'src/core/interface';

export class AccountSigninDto implements ILoginUser {
  account: string;
  password: string;
  code?: string;
}
