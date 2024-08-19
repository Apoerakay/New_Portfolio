import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';

const Modal = ({ imageUrls, currentIndex, onClose, onNavigate }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  
  const handlers = useSwipeable({
    onSwipedLeft: () => onNavigate((currentIndex + 1) % imageUrls.length),
    onSwipedRight: () => onNavigate((currentIndex - 1 + imageUrls.length) % imageUrls.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (!imageUrls.length) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div
        className={`relative w-full ${isSmallScreen ? 'max-w-full p-4' : 'max-w-4xl p-8'}`}
        {...(isSmallScreen ? handlers : {})}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          &times;
        </button>
        <img
          src={imageUrls[currentIndex]}
          alt={`Modal Image ${currentIndex}`}
          className={`w-full h-auto max-h-[80vh] object-contain`}
        />
        {!isSmallScreen && (
          <>
            <button
              onClick={() => onNavigate((currentIndex - 1 + imageUrls.length) % imageUrls.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={() => onNavigate((currentIndex + 1) % imageUrls.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
