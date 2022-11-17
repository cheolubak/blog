import { UserSocial } from '../user/social.enum';

export interface UserRegisterModel {
  userId: string;
  email: string;
  nickname: string;
  social: UserSocial;
}
