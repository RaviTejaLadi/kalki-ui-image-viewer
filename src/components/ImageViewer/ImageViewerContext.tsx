import { createContext } from 'react';
import { ImageViewerContextType } from './types/ImageViewerContextType';

export const ImageViewerContext = createContext<
  ImageViewerContextType | undefined
>(undefined);
