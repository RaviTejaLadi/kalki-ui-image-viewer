import { useImageViewer } from './hooks/useImageViewer';
import Card, { CardDescription, CardTitle } from '../Card';
import { cn } from '@/utils';

export interface ImageContentProps {
  className?: string;
}
export const ImageContent = ({ className }: ImageContentProps) => {
  const { currentIndex, images } = useImageViewer();
  const currentImage = images[currentIndex];
  return (
    <Card
      className={cn(
        'border p-4 h-full border-gray-100 my-2 rounded-md hover:shadow-md transition dark:border-gray-200/10 dark:bg-background/10',
        className
      )}
    >
      <CardTitle>{currentImage.title}</CardTitle>
      <CardDescription className="text-wrap">
        {currentImage.description}
      </CardDescription>
    </Card>
  );
};
