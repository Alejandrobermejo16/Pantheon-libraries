export interface TaskInterface {
  _id: string;
  title: string;
  description: string;
  status: 'ready to start' | 'in progress' | 'ready to verify' | 'deployed';
  userEmail: string;
  groupId?: string;
  createdAt?: string;
}

export const STATUS_MAP: Record<TaskInterface['status'], string> = {
  'ready to start': 'Ready To Start',
  'in progress': 'In Progress',
  'ready to verify': 'Ready to verify/Deploy',
  'deployed': 'Deployed'
};
