import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon library

const LatestProject = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_640.jpg",
    "https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-render-of-the-interior-of-a-cozy-cafe-restaurant-image_3811953.jpg",
    "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white">
          Latest <span className="text-green-500">Project</span>
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-4xl font-bold">01</h3>
            <h4 className="text-2xl font-bold mt-2">Frontend Project</h4>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repliat
              tempora vel sit maiores vitae atque accusantium iste voluptate.
            </p>
            <p className="mt-2 text-green-400">HTML5, CSS3, JavaScript</p>
          </div>

          {/* Carousel */}
          <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden relative rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Project ${index + 1}`}
                    className="w-full flex-shrink-0 rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-3 rounded-full hover:bg-green-500 transition shadow-lg"
              onClick={prevImage}
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-3 rounded-full hover:bg-green-500 transition shadow-lg"
              onClick={nextImage}
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
