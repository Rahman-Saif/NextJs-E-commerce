"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react';

const Searchbar = () => {

    const router = useRouter();

    const handleSearch=(e)=>{
        const form=e.target;
        const name=form.name.value;

        if(name){
            router.push(`/list?name=${name}`)
        }
    }
    return (
       <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'
       onSubmit={handleSearch}
       >
        <input type="text" name="name" placeholder='Search' className='flex-1 bg-transparent outline-none text-black'/>
        <button className='cursor-pointer'>
            <Image src='/public/search.png' alt="" width={16} height={16}/>
        </button>
       </form>
    );
};

export default Searchbar;