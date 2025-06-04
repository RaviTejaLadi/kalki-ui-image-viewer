import { AlertCircle } from 'lucide-react';
import { useImageViewer } from './hooks/useImageViewer';
import FullscreenImageDisplay from './FullscreenImageDisplay';
import { cn } from '@/utils';
import { fallbackImage } from './utils/fallback-image';

export function ImageDisplay({ className = '' }: { className?: string }) {
  const {
    currentIndex,
    rotation,
    zoom,
    images,
    isFullscreen,
    setIsFullscreen,
    showInFullScreen,
  } = useImageViewer();

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center h-96 bg-gray-100 rounded-lg',
          className
        )}
      >
        <AlertCircle className="w-12 h-12 text-[--icon-color] mb-2" />
        <p className="text-muted-foreground">No image available</p>
      </div>
    );
  }

  const handleImageClick = () => {
    if (showInFullScreen) {
      setIsFullscreen(true);
    }
  };

  return (
    <>
      <div
        className={cn(
          'relative h-96 bg-gray-100 rounded-lg overflow-hidden',
          className
        )}
      >
        <img
          src={currentImage.src}
          alt={`Image-${currentImage?.title}-${currentIndex + 1}`}
          className={cn(
            'w-full h-full object-cover transition-transform rounded-lg duration-200',
            showInFullScreen ? 'cursor-pointer' : ''
          )}
          style={{
            transform: `rotate(${rotation}deg) scale(${zoom})`,
            transformOrigin: 'center',
          }}
          onClick={handleImageClick}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
      </div>

      {isFullscreen && <FullscreenImageDisplay />}
    </>
  );
}
