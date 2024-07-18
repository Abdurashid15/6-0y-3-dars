import { useState } from 'react';
import './index.css'
const ImageGallery = () => {
  const images = [
    'https://picsum.photos/1700/900',
    'https://picsum.photos/1700/902',
    'https://picsum.photos/1700/903',
    'https://picsum.photos/1700/904',
    'https://picsum.photos/1700/905',
    'https://picsum.photos/1700/906',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className='Gallery'>
      <h2>Image Gallery</h2>
      <div
className='images'
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              cursor: 'pointer'
            }}
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100
          }}
          onClick={closeSelectedImage}
        >
          <img
            src={selectedImage}
            alt="Selected"
className='gallery-image'
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;    