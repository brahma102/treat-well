import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const router = useRouter();

  const [openDropDown, setOpenDropDown] = useState(false);
  const [back, setBack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setBack(true);
      } else {
        setBack(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeDropDown = () => {
    setOpenDropDown(false);
  };

  return (
    <nav
    style={{ backgroundColor: '#050F3E' }}
      className="z-20 fixed top-0 left-0 h-[80px] flex justify-center w-full px-[20px] sm:px-[40px] "
    >
      <div className="w-full h-full max-w-[1400px]">
        <div className="flex flex-row items-center justify-between h-full text-lg font-semibold " >
          <div className="w-[110px] sm:w-[160px] md:w-[180px] relative">
            <Image
              onClick={() => router.push("/")}
              src={Logo}
              alt="logo"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          <div className="sm:hidden">
            {
              openDropDown ?
                <svg className="cursor-pointer" onClick={() => setOpenDropDown(false)} width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                  <path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg> :
                <svg className="cursor-pointer" onClick={() => setOpenDropDown(true)} width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                  <path d="M3 5h18M3 12h18M3 19h18" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            }

            <div className={`absolute w-[100vw] left-[0px] top-[80px] p-[10px]  grid grid-row-6 ${openDropDown ? 'flex' : 'hidden'}`} style={{ backgroundColor: '#03071e' }}>
      
              <Link onClick={closeDropDown} className="text-white no-underline font-normal text-[16px] " href="/">
             Home
              </Link>
        
        

<Link  onClick={closeDropDown} className="text-white no-underline font-normal text-[16px] mt-[10px]" href="/#services">
              Services
              </Link>

            

              <Link onClick={closeDropDown} className="text-white no-underline font-normal text-[16px] mt-[10px]" href="/#about-us">
               About Us
              </Link>

              <Link onClick={closeDropDown} className="text-white no-underline font-normal text-[16px] mt-[10px]" href="/#team">
             Team
              </Link>

              <Link onClick={closeDropDown} className="text-white no-underline font-normal text-[16px] mt-[10px]" href="/signup">
               Get Started
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex">
            <Link className = "mr-[20px] text-[17px] text-white" href="/">Home</Link>

            <Link className = "mr-[20px] text-[17px] text-white" href="/#services">
              Services
            </Link>

            <Link className = "mr-[20px] text-[17px] text-white " href="/#about-us">
              AboutUs
            </Link>

            <Link className = "mr-[20px] text-[17px] text-white" href="/#team">
              Team
            </Link>
          </div>

          <div className="hidden sm:flex">
            <Link legacyBehavior href="/signup">
              <a
                
                style={{
                  backgroundColor: "#F8F9FC",
                  border: "0.5px solid #FEFEFF",
                }}
                className="px-[30px] py-[6px] text-[#4036ED] no-underline font-normal text-[14px] md:text-[16px] lg:text-[18px] rounded-[6px]"
              >
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
