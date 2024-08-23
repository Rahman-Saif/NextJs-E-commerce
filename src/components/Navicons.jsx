"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import CartModal from './CartModal';


const Navicons = () => {

    const [profileOpen,setProfileopen]=useState(false);
    const [cartOpen,setCartopen]=useState(false);

    const isLoggedin=false;

    const router=useRouter()

    const handleProfile=()=>{
        if(!isLoggedin){
            router.push("/login")
        }
        setProfileopen(!profileOpen)
    }

    return (
      <div className="flex items-center gap-4 xl:gap-6 relative">
        <Image
          src="/public/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
        />
        {profileOpen && (
          <div className="absolute p-4 rounded-md top-12 left-0 text-sm z-10">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )}
        <Image
          src="/public/notification.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="relative cursor-pointer">
          <Image
            src="/public/cart.png"
            alt=""
            width={22}
            height={22}
            className="cursor-pointer"
            onClick={() => setCartopen((prev) => !prev)}
          />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white 
          text-sm flex items-center justify-center
          ">2</div>
          {cartOpen && <CartModal />}
        </div>
      </div>
    );
};

export default Navicons;