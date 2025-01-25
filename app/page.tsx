'use client'

import LandingImage from "../public/th.jpg";
import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Link from "next/link";
import Image from "next/image";


export default function Home() {

  // State to track if the image is loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Simulate loading state
  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => setImageLoaded(true), 2000); // Simulate a 2-second load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex justify-center items-center p-4 sm:h-screen sm:py-6">
            {imageLoaded ? (
              <Image src={LandingImage} alt="Home landing page" className="object-contain max-w-full max-h-full" />
            ) : (
              <Skeleton variant="rectangular" width={450} height={550} />
            )}
          </div>
          <div className="flex flex-col justify-center items-center p-4 sm:h-screen sm:justify-center">
            <h1 className="text-3xl font-bold text-center mb-4 first-letter:text-7xl">Welcome to Tanair.</h1>
            <p className="text-center text-lg mb-12">
              Effortlessly manage your customers orders with ease and efficiency.Simplify your workflow, enhance customer satisfaction, and grow your business
            </p>
            <Link href={"/auth/login"}>
              <button type="button" className="px-20 py-2 mb-4 rounded-3xl text-white leading-6" style={{ backgroundColor: '#0087BD' }}>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
