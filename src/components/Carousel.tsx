import { useState } from "react";

interface Portfolio {
  portfolio: [{
    heading: string;
    content: string;
    img: string;
  }]
}

const Carousel = ({ portfolio }: Portfolio) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1
    );
    event.stopPropagation();
  };

  const goToNext = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1
    );
    event.stopPropagation();
  };

  return (
    <div className="carousel relative overflow-hidden">
      <div
        className="carousel-inner flex mx-auto gap-20 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {portfolio?.map((item, index) => (
          <div className="carousel-item basis-[50%]" key={index}>
            <div>
                <h3>{item.heading}</h3>
                <p>{item.content}</p>
            </div>
            <img
              src={item.img}
              alt={`Image ${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <button
        onClick={(event) => goToPrevious(event)}
        className="carousel-button"
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
      <button
        onClick={(event) => goToNext(event)}
        className="carousel-button"
        disabled={currentIndex === portfolio.length - 1}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
