import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/modal';

const CategoryButtons = ({ selectedCategory, handleCategoryClick }) => (
  <ul className="flex flex-wrap justify-center items-center py-4 gap-4">
    {['all', 'Personal', 'Wedding', 'Events', 'Fashion', 'Product'].map((category) => (
      <li
        key={category}
        onClick={() => handleCategoryClick(category)}
        className={`text-base md:text-lg lg:text-xl cursor-pointer ${
          selectedCategory === category ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white border-b-2 border-transparent'
        }`}
      >
        {category}
      </li>
    ))}
  </ul>
);

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [formStatus, setFormStatus] = useState('');
  const [selectedImageUrls, setSelectedImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchImages = async (category) => {
    try {
      setLoading(true);
      const response = await axios.get('https://photostudio-api.onrender.com/portfolio-uploads');
      const filteredData =
        category === 'all'
          ? response.data
          : response.data.filter((item) => item.category.toLowerCase() === category.toLowerCase());
      const imageUrls = filteredData.flatMap((item) => item.image);
      setImages(imageUrls);
      setLoading(false);
    } catch (error) {
      setError('Error fetching images. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (imageUrls, index) => {
    setSelectedImageUrls(imageUrls);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageUrls([]);
  };

  const handleNavigate = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    try {
      setFormStatus('Submitting...');
      const response = await axios.post('https://photostudio-api.onrender.com/contact', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      setFormStatus(response.status === 200 ? 'Message sent successfully!' : 'Failed to send message.');
      if (response.status === 200) event.target.reset();
    } catch (error) {
      setFormStatus('An error occurred while sending the message.');
    }
  };
  
  return (
    <section className="bg-dark bg-stone-800 py-8 md:py-16 lg:py-20" id="works">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium">My Work</h1>
      </div>

      <div className="container mx-auto px-4">
        <CategoryButtons selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => handleImageClick(images, index)}
                    onError={(e) => {
                      console.error('Error loading image:', e.target.src);
                    }}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-white">No images available</div>
            )}
          </div>
        )}
      </div>

      <section className="py-8 md:py-12 lg:py-20" id="contact">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">Need Help with professional photography? Let's work together!</h2>
          </div>
          <div className="w-full max-w-lg">
            <div className="bg-black p-6 md:p-8 rounded-lg">
              <div className="text-xl md:text-2xl font-medium text-white mb-4">Get in Touch</div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white rounded-lg p-2">
                    <i className="fa fa-user text-gray-800"></i>
                    <input name="fullname" type="text" className="ml-2 w-full bg-transparent outline-none" placeholder="Fullname" required />
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-2">
                    <i className="fa fa-phone text-gray-800"></i>
                    <input name="phone" type="number" className="ml-2 w-full bg-transparent outline-none" placeholder="Phone" />
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-lg p-2">
                  <i className="fa fa-at text-gray-800"></i>
                  <input name="email" type="email" className="ml-2 w-full bg-transparent outline-none" placeholder="Email" required />
                </div>
                <div className="flex items-center bg-white rounded-lg p-2">
                  <textarea name="message" className="ml-2 w-full bg-transparent outline-none" cols="30" rows="10" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-300 transition">Submit</button>
              </form>
              {formStatus && <div className="text-center mt-4 text-white">{formStatus}</div>}
            </div>
            <Modal
              imageUrls={selectedImageUrls}
              currentIndex={currentIndex}
              onClose={handleCloseModal}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;