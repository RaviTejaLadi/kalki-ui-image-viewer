import { ChevronLeft } from 'lucide-react';
import Button from '../../Button';
import { useImageViewer } from '../hooks/useImageViewer';
import { cn } from '@/utils';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';

export const ImagePreviousButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setCurrentIndex, images } = useImageViewer();

  const handlePrevious = () => {
    setCurrentIndex(
      (prev: number) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <Button
      onClick={handlePrevious}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? (
        content
      ) : (
        <ChevronLeft className="w-5 h-5 text-[--icon-color]" />
      )}
    </Button>
  );
};
