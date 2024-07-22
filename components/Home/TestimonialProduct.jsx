"use client";

import { CldImage } from "next-cloudinary";

import Button from "../Other/Button";

const Testimonial = ({ imageUrl, name, status, testimonial }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <CldImage
        key={i}
        src="icons/star"
        alt="star"
        width={32}
        height={32}
        className="w-8 sm:w-10 xl:w-12"
        format="svg"
      />
    ));
  };

  const content = (
    <div className="custom-display flex flex-col justify-center items-center lg:grid lg:grid-cols-2 py-8 md:py-14  ">
      <div className="text-center flex flex-col items-center">
        <CldImage
          src={imageUrl}
          alt="testimonial"
          className="rounded-full max-w-[70vw] md:max-w-[60vw] border-[10px] border-white lg:max-w-[35vw]"
          width={400}
          height={400}
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-1">
          {name}
        </h1>
        <p className=" sm:text-lg  font-bold">{status}</p>
      </div>

      <div>
        <CldImage
          src="icons/quote-left"
          alt="quote-left"
          className="opacity-20 w-10 pb-1 md:w-12 lg:w-16"
          width={40}
          height={40}
          format="svg"
        />
        <h1 className="font-openSans lg:text-lg font-light sm:max-w-[70vw]">
          {testimonial}
        </h1>
        <CldImage
          src="icons/quote-right"
          alt="quote-right"
          className="opacity-20 w-10 ml-auto pb-1 md:w-12 lg:w-16"
          width={40}
          height={40}
          format="svg"
        />
        <div className="flex justify-center">{renderStars()}</div>
      </div>

      <div></div>

      <div className="ml-auto pt-5 lg:pt-0">
        <Button
          isArrow
          text="Selengkapnya"
          path="/testimonial"
          className="bg-white hover:bg-grey-light text-orange"
          isWhite
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-orange-light text-white mt-14 font-nunito relative lg:hidden">
        {content}
      </div>
      <div
        className="hidden lg:block text-white mt-14 font-nunito relative xl:bg-cover"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dnwvsqlh1/image/upload/f_auto,q_auto/v1/images/bg-testimonial')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Testimonial;
