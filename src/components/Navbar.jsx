import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Searchbar from './Searchbar';
import Navicons from './Navicons';

const Navbar = () => {
    return (
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
        {/* small device */}
        <div className="flex items-center justify-between h-full md:hidden ">
          <Link href="/" className="text-2xl tracking-wide">
            Daraz
          </Link>
          <Menu></Menu>
        </div>
        {/* mid & large device  */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/public/logo.png"
                alt="menufooter"
                width={28}
                height={28}
                className="cursor-pointer"
                priority={true}
              />
              <div className="text-2xl tracking-wide">Daraz</div>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">HomePage</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <Searchbar />
            <Navicons />
          </div>
        </div>
      </div>
    );
};

export default Navbar;