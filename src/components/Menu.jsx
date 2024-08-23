"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Menu = () => {

    const [open,setOpen]=useState(false);


    return (
      
        <div>
          <Image
            src="/public/menu.png"
            alt="menufooter"
            width={28}
            height={28}
            className="cursor-pointer"
            priority={true}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div
              className="absolute bg-black text-white left-0 top-20 w-full 
          h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10"
            >
              <Link href="">Homepage</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/deals">Deals</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/logout">Logout</Link>
              <Link href="/cart">Cart</Link>
            </div>
          )}
        </div>
        
      
    );
};

export default Menu;