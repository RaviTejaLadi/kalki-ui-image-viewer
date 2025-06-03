import { cn } from '@/utils';
import { ReactNode } from 'react';
import Card from '../Card';

export interface ImageControlsWrapperProps {
  className?: string;
  children: ReactNode;
}

const ImageControlsWrapper: React.FC<ImageControlsWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <Card
      className={cn(
        'flex items-center justify-center py-2 gap-2 my-2 border px-4 h-full border-gray-100 mb-5 rounded-md hover:shadow-md transition dark:border-gray-200/10 dark:bg-background/10',
        className
      )}
    >
      {children}
    </Card>
  );
};

export default ImageControlsWrapper;
