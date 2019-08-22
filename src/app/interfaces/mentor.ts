import { MentorPlan } from './mentor_plan';

export interface Mentor {
  id: number
  user_id: number
  title: string
  appeal_message: string
  image1: string
  image2: string
  image3: string
  image4: string
  mentor_plans?: MentorPlan[]
}
