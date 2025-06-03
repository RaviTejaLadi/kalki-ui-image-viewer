import { useImageViewer } from '../hooks/useImageViewer';
import { RefreshCw } from 'lucide-react';
import Button from '../../Button';
import { cn } from '@/utils';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';

export const ImageRotateButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setRotation } = useImageViewer();

  const handleRotate = () => {
    setRotation((prev: number) => (prev + 90) % 360);
  };

  return (
    <Button
      onClick={handleRotate}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? (
        content
      ) : (
        <RefreshCw className="w-5 h-5 text-[--icon-color]" />
      )}
    </Button>
  );
};
