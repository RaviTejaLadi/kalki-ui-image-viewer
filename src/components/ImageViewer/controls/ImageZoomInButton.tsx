import { useImageViewer } from '../hooks/useImageViewer';
import Button from '../../Button';
import { cn } from '@/utils';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';
import { ZoomIn } from 'lucide-react';

export const ImageZoomInButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setZoom } = useImageViewer();

  const handleZoomIn = () => {
    setZoom((prev: number) => Math.min(prev + 0.2, 3));
  };

  return (
    <Button
      onClick={handleZoomIn}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? content : <ZoomIn className="w-5 h-5 text-[--icon-color]" />}
    </Button>
  );
};
