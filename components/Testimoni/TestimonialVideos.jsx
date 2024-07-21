"use client";

import dataTestimonial from "@/data/testimonial.json";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestimonialVideos() {
  const responsive = {
    allDisplay: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="custom-display z-2">
      
      <Carousel responsive={responsive} infinite>
        {dataTestimonial.videos.map((item) => (
          <video
            src={item.videoUrl}
            key={item.id}
            controls
            className="w-full lg:w-2/6 mx-auto mt-14 mb-12"
          ></video>
        ))}
      </Carousel>
    </div>
  );
}
