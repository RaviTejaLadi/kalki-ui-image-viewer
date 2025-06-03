import { useImageViewer } from '../hooks/useImageViewer';

export const ImageZoomView = () => {
  const { zoom } = useImageViewer();
  return (
    <div className="text-sm text-muted-foreground min-w-12 text-center">
      {Math.round(zoom * 100)}%
    </div>
  );
};
