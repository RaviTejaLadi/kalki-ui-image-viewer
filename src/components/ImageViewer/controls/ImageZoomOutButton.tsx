import { useImageViewer } from '../hooks/useImageViewer';
import { cn } from '@/utils';
import Button from '../../Button';
import { ZoomOut } from 'lucide-react';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';

export const ImageZoomOutButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setZoom } = useImageViewer();

  const handleZoomOut = () => {
    setZoom((prev: number) => Math.max(prev - 0.2, 0.3));
  };

  return (
    <Button
      onClick={handleZoomOut}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? content : <ZoomOut className="w-5 h-5 text-[--icon-color]" />}
    </Button>
  );
};
