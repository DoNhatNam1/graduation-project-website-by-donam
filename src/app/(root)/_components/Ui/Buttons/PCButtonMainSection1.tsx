'use client'

import React from "react";
import { useRouter } from 'next/navigation'
import { Button } from "@nextui-org/button";

const PCButtonMainSection1 = () => {

  const router = useRouter()
  
  return (
    <>
      <div className="flex justify-start items-center px-16 mt-7 translate-x-14 text-xl text-slate-50 max-md:px-5 max-md:max-w-full">
      <Button 
      type="button" onClick={() => router.push('/signup')}
        className="justify-center px-8 py-6 text-white font-bold bg-blue-600 rounded-2xl max-md:px-5"
        >
          Dùng thử miễn phí
        </Button>
      </div>
    </>
  );
};

export default PCButtonMainSection1;
