export interface Action {
  label: string;
  icon?: string;
  type?: 'default' | 'danger' | 'primary';
  callback: () => void;
}