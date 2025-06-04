import CloseButton from '../CloseButton';
import { FullscreenControls } from './FullscreenControls';
import { useImageViewer } from './hooks/useImageViewer';
import { fallbackImage } from './utils/fallback-image';

const FullscreenImageDisplay = () => {
  const { currentIndex, rotation, zoom, images, setIsFullscreen } =
    useImageViewer();
  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-background/75 bg-opacity-95 z-50 flex items-center justify-center">
      <CloseButton
        aria-label="Close fullscreen"
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10"
        onClick={() => setIsFullscreen(false)}
      />

      <FullscreenControls />

      <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
        <img
          src={currentImage.src}
          alt={`Image ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          style={{
            transform: `rotate(${rotation}deg) scale(${zoom})`,
            transformOrigin: 'center',
          }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
      </div>
    </div>
  );
};

export default FullscreenImageDisplay;
