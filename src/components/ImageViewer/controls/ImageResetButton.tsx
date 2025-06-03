import Button from '../../Button';
import { useImageViewer } from '../hooks/useImageViewer';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';
import { cn } from '@/utils';

export const ImageResetButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setZoom, setRotation } = useImageViewer();

  const handleReset = () => {
    setZoom(1);
    setRotation(0);
  };

  return (
    <Button
      onClick={handleReset}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? content : 'Reset'}
    </Button>
  );
};
