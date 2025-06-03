import { ChevronRight } from 'lucide-react';
import Button from '../../Button';
import { useImageViewer } from '../hooks/useImageViewer';
import { cn } from '@/utils';
import { ImageControlsButtonProps } from '../types/ImageControlsButtonProps';

export const ImageNextButton = ({
  content,
  className,
  ...props
}: ImageControlsButtonProps) => {
  const { setCurrentIndex, images } = useImageViewer();

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % images.length);
  };

  return (
    <Button
      onClick={handleNext}
      className={cn('transition-colors', className)}
      aria-label="Previous image"
      {...props}
    >
      {content ? (
        content
      ) : (
        <ChevronRight className="w-5 h-5 text-[--icon-color]" />
      )}
    </Button>
  );
};
