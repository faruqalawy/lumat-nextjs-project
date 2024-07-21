'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

function Button(props) {
  const { isWhite, isArrow } = props;

  return (
    <Link href={props.path}>
        <button
          className={twMerge(
            "flex bg-orange hover:bg-dark-orange text-white rounded-full h-5 md:h-10 lg:h-14 sm:mt-2 lg:mt-4 items-center w-fit px-3 py-5 md:py-6 lg:py-8",
            props.className
          )}
        >
          <h2
            className={`font-barlow font-medium md:text-lg lg:text-2xl ${
              isArrow ? "pl-1.5 md:pl-3 lg:pl-5" : ""
            }`}
          >
            {props.text}
          </h2>
           <CldImage
            src={isWhite ? "icons/arrow-orange" : "icons/arrow"}
            className="md:w-5 lg:w-6 mr-1.5 sm:mr-2.5 lg:mr-6 ml-1 md:ml-1.5 lg:ml-2.5"
            alt="arrow"
            width={16}
            height={16}
          />
        </button>
    </Link>
  );
}

export default Button;
