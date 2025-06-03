import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageViewer } from './hooks/useImageViewer';
import Button, { ButtonProps } from '../Button';
import { cn } from '@/utils';

interface FullscreenControlsProps extends ButtonProps {
  className?: string;
}

export function FullscreenControls({
  className,
  variant = 'outline',
  size = 'sm',
  ...props
}: FullscreenControlsProps) {
  const { setCurrentIndex, images } = useImageViewer();

  if (images.length <= 1) return null;

  const handlePrevious = () => {
    setCurrentIndex(
      (prev: number) => (prev - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev + 1) % images.length);
  };

  return (
    <>
      <Button
        onClick={handlePrevious}
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2  hover:bg-white/20 transition-colors z-10',
          className
        )}
        aria-label="Previous image"
        size={size}
        variant={variant}
        {...props}
      >
        <ChevronLeft className="w-8 h-8 text-[--icon-color]" />
      </Button>

      <Button
        onClick={handleNext}
        className={cn(
          'absolute right-4 top-1/2 -translate-y-1/2  hover:bg-white/20  transition-colors z-10',
          className
        )}
        aria-label="Next image"
        size={size}
        variant={variant}
        {...props}
      >
        <ChevronRight className="w-8 h-8 text-[--icon-color]" />
      </Button>
    </>
  );
}
