import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils';
import { useImageViewer } from './hooks/useImageViewer';
import Button from '../Button';
import Div from '../Div';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { fallbackImage } from './utils/fallback-image';

interface ImageThumbnailsProps {
  className?: string;
}

export function ImageThumbnails({ className }: ImageThumbnailsProps) {
  const { images, currentIndex, setCurrentIndex } = useImageViewer();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  if (images.length <= 1) return null;

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollWidth - container.clientWidth - container.scrollLeft > 1
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 100;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();
    container.addEventListener('scroll', handleScroll);

    const observer = new ResizeObserver(() => updateScrollButtons());
    observer.observe(container);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Div className={cn('relative flex items-center gap-2 mt-4', className)}>
      {canScrollLeft && (
        <Button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 p-1 shadow"
          variant="outline"
          size={'xs'}
        >
          <ChevronLeft className="w-5 h-5 text-[--icon-color]" />
        </Button>
      )}

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
                target.src = fallbackImage;
              }}
            />
          </Button>
        ))}
      </Div>

      {canScrollRight && (
        <Button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 p-1 shadow"
          variant="outline"
          size={'xs'}
        >
          <ChevronRight className="w-5 h-5 text-[--icon-color]" />
        </Button>
      )}
    </Div>
  );
}
