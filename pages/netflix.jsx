import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix App</h2>
          <h3>NextJS / Tailwind / Next-Auth</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I have developed this application using NextJS and have hosted it on
            Vercel. This application comes equipped with user authentication
            capabilities, which is powered by Next-Auth and supports Google and
            Github authentication. The application retrieves movie data from the
            TMDB movie API and displays various movie categories to the users.
            It features horizontal sliding and a featured selection to improve
            the user experience. Moreover, users can click on the Play button to
            watch the movie trailer. This application is an excellent example of
            the powerful features that NextJS and Vercel offer to developers.
            The user authentication feature provides a seamless experience for
            users, as they can use their existing Google or Github accounts to
            log in to the application.
          </p>
          <Link
            href="https://github.com/abhishekParker/netflix-next"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link
            href="https://netflix-next-wy9k.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next-Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB API
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

export default netflix;
