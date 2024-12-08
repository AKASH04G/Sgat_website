import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slideshow.css'; // Custom styles for the slideshow

const Slideshow = () => {
  const images = [
    { id: 1, url: "../images/sgat2.jpg" },
    { id: 2, url: "../images/sgat_banner1.jpg" },
    { id: 3, url: "../images/sgat3.jpg" },
  ];

  return (
    <div className="slideshow-container">
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        className="custom-carousel"
      >
        {images.map((image) => (
          <div key={image.id} className="slideshow-slide">
            <img src={image.url} alt={`Slide ${image.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
