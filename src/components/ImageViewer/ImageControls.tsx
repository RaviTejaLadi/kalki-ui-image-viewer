import { cn } from '@/utils';
import {
  ImageNextButton,
  ImagePreviousButton,
  ImageResetButton,
  ImageRotateButton,
  ImageZoomInButton,
  ImageZoomOutButton,
  ImageZoomView,
} from './controls';
import ImageControlsWrapper from './ImageControlsWrapper';

export function ImageControls({ className = '' }: { className?: string }) {
  return (
    <ImageControlsWrapper
      className={cn('border-none flex justify-start items-center', className)}
    >
      <div className="flex gap-2 items-center">
        <ImagePreviousButton variant={'outline'} size="xs" />
        <ImageNextButton variant={'outline'} size="xs" />
      </div>
      <div className="flex gap-2 items-center">
        <ImageZoomOutButton variant={'outline'} size="xs" />
        <ImageZoomView />
        <ImageZoomInButton variant={'outline'} size="xs" />
      </div>
      <div className="flex gap-2 items-center">
        <ImageRotateButton variant={'outline'} size="xs" />
        <ImageResetButton variant={'outline'} size="xs" />
      </div>
    </ImageControlsWrapper>
  );
}
