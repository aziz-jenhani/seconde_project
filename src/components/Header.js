import React from 'react';
import { useContext } from 'react';
//SideBar Context 
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

//Import Icon
import { BsBag } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
const Header = () => {
//header state
  const [isActive,setIsActive]=useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
//event listnner
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY > 60 ? setIsActive(true) :setIsActive (false);
  });
});




  return <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed z-10 w-full transition-all h-[50px]  `} >
    <div className="container mx-auto flex items-center justify-between h-full
     ">
      {/*logo*/}
          
      <Link to={'/'}>
        <img className='w-[40px]' src={Logo} alt="" />
      </Link>
      {/*cart*/}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
      <BsBag className='text-2xl' />
      <div className="absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px]
      text-white flex justify-center items-center  bg-red-500 rounded-md" >
        {itemAmount}
      </div>
    </div>
    </div>




    

  </header>;
};

export default Header;
