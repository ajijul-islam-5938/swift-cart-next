"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    { loop: true },
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
  );

  return (
    <div className="overflow-hidden w-full">
      <div className="navigation-wrapper overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-full"
            />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image
              src="/images/slides/slide.png"
              width={600}
              height={400}
              alt="slide"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
