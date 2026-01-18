
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum AnimationState {
  HIDDEN = 'hidden',
  VISIBLE = 'visible'
}
