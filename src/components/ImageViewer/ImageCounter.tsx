import { cn } from '@/utils';
import { useImageViewer } from './hooks/useImageViewer';

export function ImageCounter({ className = '' }: { className?: string }) {
  const { currentIndex, images } = useImageViewer();

  if (images.length <= 1) return null;

  return (
    <div
      className={cn(
        'text-center mt-2 text-sm text-muted-foreground',
        className
      )}
    >
      Image {currentIndex + 1} of {images.length}
    </div>
  );
}
