import Image from "next/image";
import React from "react";
import Ecommerce from "../public/assets/projects/Ecommerce.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
const ecommerce = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          src={Ecommerce}
          alt="/"
          fill
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Ecommerce App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-width-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This eCommerce website is developed using ReactJS and Tailwind CSS,
            along with Redux-Toolkit and Firebase Authentication to provide
            robust state management and secure user authentication. Users can
            click on product cards to view the product details, including
            images, description, and price, and add items to their shopping
            cart. The cart section allows users to add or remove items and
            displays the final price of all products in the cart. The website
            also features a react-carousel component that allows users to view
            multiple product images. The use of pre-built components and
            utilities provided by Tailwind CSS helps streamline the development
            process and ensures consistency in the websites design.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link
              href={"https://github.com/abhishekParker/E-commerce-React"}
              target="_blank"
            >
              Code
            </Link>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <Link
              href={"https://superb-eclair-870b53.netlify.app/"}
              target="_blank"
            >
              Demo
            </Link>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML / CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux-toolkit
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ecommerce;
