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
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className='gallery-image'
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
        className='focus'
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