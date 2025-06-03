import { ImagesListTypes } from './ImagesListTypes';

interface ImageViewerContextType {
  currentIndex: number;
  rotation: number;
  zoom: number;
  isFullscreen: boolean;
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;
  setRotation: (rotation: number | ((prev: number) => number)) => void;
  setZoom: (zoom: number | ((prev: number) => number)) => void;
  setIsFullscreen: (isFullscreen: boolean) => void;
  images: ImagesListTypes[];
  showInFullScreen?: boolean;
}

export { type ImageViewerContextType };
