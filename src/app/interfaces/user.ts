import { UserDetail } from './user-detail';
import { Mentor } from './mentor';

export interface User {
  id: number
  uid: string
  image: string
  email: string
  nickname: string
  sex?: string
  status?: string
  birthday?: string
  created_at: string
  updated_at: string
  user_detail?: UserDetail
  mentor?: Mentor
}
