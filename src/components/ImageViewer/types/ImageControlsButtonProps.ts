import { ButtonProps } from '@/components/Button';
import { ReactNode } from 'react';

export interface ImageControlsButtonProps extends Omit<ButtonProps, 'content'> {
  content?: ReactNode;
  className?: string;
}
