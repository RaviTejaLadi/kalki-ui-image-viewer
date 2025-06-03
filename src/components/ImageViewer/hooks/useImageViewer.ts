import { useContext } from 'react';
import { ImageViewerContext } from '../ImageViewerContext';

export function useImageViewer() {
  const context = useContext(ImageViewerContext);
  if (!context) {
    throw new Error('ImageViewer components must be used within ImageViewer');
  }
  return context;
}
