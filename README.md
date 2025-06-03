# kalki-ui-image-viewer

A flexible and feature-rich image viewer component for React applications. Built with TypeScript and styled with Tailwind CSS, it provides a seamless image viewing experience with features like zoom, rotation, fullscreen mode, and multi-image support.

![React Image Viewer](https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000)

## Features

- 🎨 Compound component architecture for maximum flexibility
- 🖼️ Fullscreen mode with navigation controls
- 🔍 Image zoom and rotation controls
- 📱 Responsive design that works on all screen sizes
- 🛡️ Built-in error handling with fallback images
- 📝 TypeScript support with full type definitions
- 🎯 Customizable styling with Tailwind CSS

## Installation

```bash
npm install kalki-ui-image-viewer
```

### Peer Dependencies

```json
{
  "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
  "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0"
}
```

## Quick Start

```tsx
import ImageViewer, {  ImageDisplay, Controls, ImageCounter } from 'kalki-ui-image-viewer';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
];

function App() {
  return (
    <ImageViewer images={images} showInFullScreen={true}>
      <ImageDisplay />
      <Controls />
      <ImageCounter />
    </ImageViewer>
  );
}
```

## Components

### ImageViewer

The main container component that provides context to all child components.

```tsx
interface ImageViewerProps {
  // Array of image URLs to display
  images: string[];
  
  // Enable/disable fullscreen mode on image click
  showInFullScreen?: boolean;
  
  // React nodes to render (ImageDisplay, Controls, etc.)
  children: React.ReactNode;
}
```

### ImageDisplay

Renders the current image with zoom and rotation transforms. Handles click events for fullscreen mode and provides error fallback.

### Controls

Provides buttons for image manipulation:
- Previous/Next navigation (only shown with multiple images)
- Rotate clockwise
- Zoom in/out

### ImageCounter

Displays the current image number and total image count. Only shown when multiple images are provided.

## Custom Controls

You can create custom controls using the useImageViewer hook:

```tsx
function CustomControls() {
  const { setZoom, setRotation, zoom, rotation } = useImageViewer();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <label>Zoom: {zoom.toFixed(1)}x</label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={zoom}
          onChange={(e) => setZoom(parseFloat(e.target.value))}
        />
      </div>
      <div className="flex items-center gap-2">
        <label>Rotation: {rotation}°</label>
        <input
          type="range"
          min="0"
          max="360"
          step="90"
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}
```

## Context and Hooks

### useImageViewer

A custom hook that provides access to the ImageViewer context. Must be used within an ImageViewer component.

```tsx
interface ImageViewerContextType {
  // Current image index
  currentIndex: number;
  
  // Current rotation in degrees
  rotation: number;
  
  // Current zoom level
  zoom: number;
  
  // Fullscreen state
  isFullscreen: boolean;
  
  // Methods to update state
  setCurrentIndex: (index: number) => void;
  setRotation: (rotation: number) => void;
  setZoom: (zoom: number) => void;
  setIsFullscreen: (isFullscreen: boolean) => void;
  
  // Configuration
  images: string[];
  showInFullScreen?: boolean;
}
```

## Default Values

- Initial zoom: 1
- Initial rotation: 0 degrees
- Maximum zoom: 3
- Minimum zoom: 0.5
- Rotation increment: 90 degrees
- showInFullScreen: true

## Best Practices

1. Always provide alt text for images through the image URLs
2. Consider keyboard accessibility when creating custom controls
3. Use appropriate ARIA labels for better accessibility
4. Handle loading and error states appropriately
5. Optimize images for different screen sizes

## Custom Layout Example

You can arrange the components in any layout using your own container components:

```tsx
function CustomLayout() {
  return (
    <ImageViewer images={images}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <ImageDisplay />
        </div>
        <div className="flex justify-center">
          <Controls />
        </div>
        <div className="flex items-center justify-center">
          <ImageCounter />
        </div>
      </div>
    </ImageViewer>
  );
}
```

## License

MIT © [Your Name]

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create new Pull Request