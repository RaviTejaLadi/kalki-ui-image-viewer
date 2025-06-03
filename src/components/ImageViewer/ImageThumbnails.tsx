import { useRef } from 'react';
import { cn } from '@/utils';
import { useImageViewer } from './hooks/useImageViewer';
import Button from '../Button';
import Div from '../Div';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageThumbnailsProps {
  className?: string;
}

export function ImageThumbnails({ className }: ImageThumbnailsProps) {
  const { images, currentIndex, setCurrentIndex } = useImageViewer();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (images.length <= 1) return null;

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 100;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Div className={cn('relative flex items-center gap-2 mt-4', className)}>
      <Button
        onClick={() => scroll('left')}
        className="absolute left-0 z-10 p-1 shadow"
        variant="outline"
      >
        <ChevronLeft className="w-5 h-5 text-[--icon-color]" />
      </Button>

      <Div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto p-2 scrollbar-hide scroll-smooth ml-8 mr-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        {images.map((image, index) => (
          <Button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{ padding: 0 }}
            className={cn(
              'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all',
              index === currentIndex && 'border-2 border-blue-500 ring-blue-200'
            )}
            variant={'light'}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIzMiIgeT0iMzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIiBmaWxsPSIjNkI3MzgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiPkVycm9yPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
          </Button>
        ))}
      </Div>

      <Button
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 p-1 shadow"
        variant="outline"
      >
        <ChevronRight className="w-5 h-5 text-[--icon-color]" />
      </Button>
    </Div>
  );
}
