import {
  useState,
  forwardRef,
  useImperativeHandle,
  Ref,
  ReactNode,
} from 'react';
import { ImageViewerContext } from './ImageViewerContext';
import { ImageCounter } from './ImageCounter';
import { ImageThumbnails } from './ImageThumbnails';
import type { ImagesListTypes } from './types/ImagesListTypes';
import type { ImageControlsButtonProps } from './types/ImageControlsButtonProps';
import type { ImageViewerContextType } from './types/ImageViewerContextType';
import { ImageDisplay } from './ImageDisplay';
import { ImageControls } from './ImageControls';
import { ImageContent } from './ImageContent';
import ImageControlsWrapper from './ImageControlsWrapper';
import {
  ImageNextButton,
  ImagePreviousButton,
  ImageResetButton,
  ImageRotateButton,
  ImageZoomInButton,
  ImageZoomOutButton,
  ImageZoomView,
} from './controls';

interface ImageViewerProps {
  images: ImagesListTypes[];
  children: ReactNode;
  showInFullScreen?: boolean;
  defaultIndex?: number;
}

export interface ImageViewerRef {
  next: () => void;
  prev: () => void;
  reset: () => void;
}

const ImageViewer = forwardRef(function ImageViewer(
  {
    images = [],
    children,
    showInFullScreen = true,
    defaultIndex = 0,
  }: ImageViewerProps,
  ref: Ref<ImageViewerRef>
) {
  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(defaultIndex, images.length - 1))
  );
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useImperativeHandle(ref, () => ({
    next: () => {
      setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
    },
    prev: () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    },
    reset: () => {
      setCurrentIndex(defaultIndex);
      setZoom(1);
      setRotation(0);
    },
  }));

  return (
    <ImageViewerContext.Provider
      value={{
        currentIndex,
        rotation,
        zoom,
        isFullscreen,
        setCurrentIndex,
        setRotation,
        setZoom,
        setIsFullscreen,
        images,
        showInFullScreen,
      }}
    >
      <div className="w-full max-w-4xl mx-auto p-4">{children}</div>
    </ImageViewerContext.Provider>
  );
});

ImageViewer.displayName = 'ImageControls';

// Attach subComponents and export
export default Object.assign(ImageViewer, {
  Display: ImageDisplay,
  Controls: ImageControls,
  Content: ImageContent,
  Counter: ImageCounter,
  Thumbnails: ImageThumbnails,
  ControlsWrapper: ImageControlsWrapper,
  NextButton: ImageNextButton,
  PreviousButton: ImagePreviousButton,
  ResetButton: ImageResetButton,
  RotateButton: ImageRotateButton,
  ZoomInButton: ImageZoomInButton,
  ZoomOutButton: ImageZoomOutButton,
  ZoomView: ImageZoomView,
});

export type {
  ImagesListTypes,
  ImageViewerContextType,
  ImageControlsButtonProps,
};
