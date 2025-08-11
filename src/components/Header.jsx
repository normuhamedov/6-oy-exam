import React from 'react'
import { IconOne, IconTwo, IconThree, MyIcon } from "../assets/icons";
import { Link } from 'react-router-dom';
import Button from './Button';
import '../App'
function Header() {
    return (
        <div className=' flex items-center justify-between mt-[24px] w-[900px] px-[24px] header-bg fixed'>
            <h2 className='py-[26px] font-[Plus Jakarta Display] font-medium text-[14px] leading-[100%] tracking-[0.18em] header-logo cursor-pointer'>VISION UI FREE</h2>
            <div className='flex items-center gap-[25px]'>
                <Link className='flex items-center gap-2 group transition-all duration-300 ease-in-out'
                >
                    <MyIcon className='transition-transform duration-300 group-hover:scale-110 group-active:scale-95' />
                    <p className='font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em] 
                    bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-300 
                    group-hover:from-blue-400 group-hover:to-purple-500 group-active:from-purple-500 group-active:to-pink-500'>
                        DASHBOARD
                    </p>
                </Link>
                <Link className='flex items-center gap-2 group transition-all duration-300 ease-in-out'>
                    <IconOne className='transition-transform duration-300 group-hover:scale-110 group-active:scale-95' />
                    <p className='font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em] 
                    bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent 
                    transition-all duration-300 
                    group-hover:from-blue-400 group-hover:to-purple-500 
                    group-active:from-purple-500 group-active:to-pink-500'>PROFILE</p>
                </Link>
                <Link to='/register' className='flex items-center gap-2 group transition-all duration-300 ease-in-out'>
                    <IconTwo className='transition-transform duration-300 group-hover:scale-110 group-active:scale-95' />
                    <p className='font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em] 
                    bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent 
                    transition-all duration-300 
                    group-hover:from-blue-400 group-hover:to-purple-500 
                    group-active:from-purple-500 group-active:to-pink-500'>SIGN UP</p>
                </Link>
                <Link to='/login' className='flex items-center gap-2 group transition-all duration-300 ease-in-out'>
                    <IconThree className='transition-transform duration-300 group-hover:scale-110 group-active:scale-95' />
                    <p className='font-[Plus Jakarta Display] font-bold text-[10px] leading-[150%] tracking-[0em] 
                    bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent 
                    transition-all duration-300 
                    group-hover:from-blue-400 group-hover:to-purple-500 
                    group-active:from-purple-500 group-active:to-pink-500'>SIGN IN</p>
                </Link>
            </div>
            <Button size="sm">Free Download</Button>
        </div>
    )
}

export default Header
