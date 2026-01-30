export type ModalSize = typeof MODAL_SIZES[number];
export type ModalVariant = typeof MODAL_VARIANTS[number];

export const MODAL_SIZES = ['sm', 'md', 'lg', 'fullscreen'];
export const MODAL_VARIANTS = ['default', 'info', 'warning', 'error', 'danger'];


export const ICONS: Record<ModalVariant, string> = {
  default: 'info',
  info: 'info',
  warning: 'warning',
  error: 'error_outline',
  danger: 'dangerous'
};
