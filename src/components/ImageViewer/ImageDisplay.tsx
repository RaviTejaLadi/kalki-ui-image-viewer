import { AlertCircle } from 'lucide-react';
import { useImageViewer } from './hooks/useImageViewer';
import FullscreenImageDisplay from './FullscreenImageDisplay';
import { cn } from '@/utils';

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
        className={`flex flex-col items-center justify-center h-96 bg-gray-100 rounded-lg ${className}`}
      >
        <AlertCircle className="w-12 h-12 text-gray-400 mb-2" />
        <p className="text-gray-500">No image available</p>
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
        className={`relative h-96 bg-gray-100 rounded-lg overflow-hidden ${className}`}
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
            target.src =
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIyMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZpbGw9IiM2QjczODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+RXJyb3IgTG9hZGluZyBJbWFnZTwvdGV4dD48L3N2Zz4=';
          }}
        />
      </div>

      {isFullscreen && <FullscreenImageDisplay />}
    </>
  );
}
