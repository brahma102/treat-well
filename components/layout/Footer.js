import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className=" lg:py-[40px] lg:px-[120px] bg-[#071555] sm:px-[40px] sm:py-[60px] mt-2">
      <div className=" sm:grid  grid-cols-1 pl-5 md:grid-cols-2 lg:flex gap-4 justify-between  max-w-[1400px] m-auto ">
        <div className="max-w-[350px]">
          <div className="w-[130px]">
            <Image src={Logo} alt="logo" />
          </div>
          <p className="footer-text-color text-[14px] sm:text-[16px] mt-[5px]">
            It works for nutrition, exercise, mindfulness, healthy lifestyle and
            pain management for the best outcomes with tools and guidance.
          </p>
          <div className="w-full relative mt-[10px] max-w-[400px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[50px] px-[20px] pr-[160px] rounded-[40px] text-[16px] outline-none"
              style={{ color: "#020B16" }}
            />
            <button
              className="h-[40px] absolute top-[5px] right-[5px] rounded-[40px] w-[140px] text-[14px] text-white"
              style={{ backgroundColor: "#2149FF" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      
       
            <div className="mt-[30px] flex flex-col ">
              <h4 className="inter text-[20px] text-white font-medium">
                Services
              </h4>
              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Nutrition
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Exercise
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Healthy Lifestyle
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Mindfulness
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Pain Management
              </Link>
            </div>
   
            <div className="mt-[30px] flex flex-col">
              <h4 className="inter text-[20px] text-white font-medium">
                Extra Links
              </h4>
              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Customer Support
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Terms & Condition
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Privacy Policy
              </Link>

              <Link
                className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"
                href="/"
              >
                Service Details
              </Link>
            </div>
         
            <div className="mt-[30px] flex flex-col footer-text-color">
              <h4 className="inter text-[20px] text-white font-medium">
                Contact Info.
              </h4>
              <p className="text-[14px] sm:text-[16px] ">
                9675 Grant Ave. <br /> Chicago, 60411
              </p>
              <div className="flex items-center mt-[10px]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7208 10.5087C13.7409 10.5087 12.7788 10.3554 11.8671 10.054C11.4203 9.9016 10.8711 10.0414 10.5984 10.3216L8.79879 11.6805C6.71175 10.5661 5.42618 9.28055 4.32733 7.20854L5.64587 5.45528C5.98844 5.11307 6.11131 4.61317 5.9641 4.14413C5.6615 3.22731 5.50779 2.26533 5.50779 1.28472C5.50783 0.576318 4.93169 0 4.22355 0H1.28428C0.576141 0 0 0.576318 0 1.28468C0 9.40433 6.60368 16.01 14.7208 16.01C15.429 16.01 16.0051 15.4337 16.0051 14.7253V11.7934C16.0051 11.085 15.4289 10.5087 14.7208 10.5087Z"
                    fill="#2149FF"
                  />
                </svg>
                <p className="text-[14px] sm:text-[16px] m-[0px] mb-[5px] ml-[5px]">
                  (386) 237-8200
                </p>
              </div>

              <div className="flex items-center mt-[10px]">
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.392303 1.04278C2.96897 3.0346 7.49021 6.53881 8.81907 7.63143C8.99745 7.7789 9.18879 7.85387 9.38742 7.85387C9.58565 7.85387 9.77665 7.7796 9.95464 7.63283C11.2846 6.53914 15.8059 3.0346 18.3826 1.04278C18.543 0.919011 18.5675 0.701458 18.4376 0.550141C18.1373 0.200483 17.6897 0 17.2099 0H1.56491C1.08518 0 0.637503 0.200484 0.337301 0.550175C0.207423 0.701458 0.231881 0.919011 0.392303 1.04278Z"
                    fill="#2149FF"
                  />
                  <path
                    d="M18.5472 2.11922C18.4085 2.06031 18.2454 2.08086 18.1301 2.17083C15.2726 4.38191 11.6257 7.21605 10.4783 8.1598C9.83427 8.69043 8.94048 8.69043 8.29498 8.1591C7.07195 7.15326 2.97657 3.97538 0.643965 2.1708C0.527837 2.08083 0.364371 2.06098 0.226865 2.11919C0.0886267 2.17779 0 2.30401 0 2.44311V11.4214C0 12.209 0.701644 12.8494 1.56452 12.8494H17.2096C18.0724 12.8494 18.7741 12.209 18.7741 11.4214V2.44311C18.7741 2.30401 18.6854 2.17746 18.5472 2.11922Z"
                    fill="#2149FF"
                  />
                </svg>
                <p className="text-[14px] sm:text-[16px] m-[0px] ml-[5px]">
                  example@gmail.com
                </p>
              </div>
            </div>
          </div>
     
     
      {/* Copy Right Section */}
      <div
        className="mt-[60px]"
        style={{ borderTop: "1px solid rgba(177, 181, 185, 0.3)" }}
      >
        <p
          className="mt-[20px] text-[14px] sm:text-[16px] text-center"
          style={{ color: "#B1B5B9" }}
        >
          © 2023 healwell All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div className='sm:grid grid-cols-2 gap-5 lg:flex justify-between max-w-[1400px] m-auto'>
<div className='max-w-[350px]'>
  <div className='w-[130px]'>
    <Image src={Logo} alt="logo" />
  </div>
  <p className='footer-text-color text-[14px] sm:text-[16px] mt-[5px]'>It works for nutrition, exercise, mindfulness, healthy lifestyle and pain management for the best outcomes with tools and guidance.</p>
  <div className='w-full relative mt-[10px] max-w-[400px]'>
    <input
      type="email"
      placeholder="Enter your email"
      className='w-full h-[50px] px-[20px] pr-[160px] rounded-[40px] text-[16px] outline-none'
      style={{ color: '#020B16' }} />
    <button
      className='h-[40px] absolute top-[5px] right-[5px] rounded-[40px] w-[140px] text-[14px] text-white'
      style={{ backgroundColor: '#2149FF' }}>
      Subscribe
    </button>
  </div>
</div>

<div className='mt-[30px] flex flex-col'>
  <h4 className='inter text-[20px] text-white font-medium'>Services</h4>
  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
   Nutrition
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
 Exercise
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
  Healthy Lifestyle
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
    Mindfulness
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]"  href="/">
  Pain Management
  </Link>
</div>


<div className='mt-[30px] flex flex-col'>
  <h4 className='inter text-[20px] text-white font-medium'>Extra Links</h4>
  <Link  className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
 Customer Support
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
Terms & Condition
  </Link>

  <Link className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
  Privacy Policy
  </Link>

  <Link  className="text-[14px] sm:text-[16px] footer-text-color mt-[10px]" href="/">
   Service Details
  </Link>
</div>

<div className='mt-[30px] flex flex-col footer-text-color'>
  <h4 className='inter text-[20px] text-white font-medium'>Contact Info.</h4>
  <p className="text-[14px] sm:text-[16px]">9675 Grant Ave. <br /> Chicago, 60411</p>
  <div className='flex items-center mt-[10px]'>
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7208 10.5087C13.7409 10.5087 12.7788 10.3554 11.8671 10.054C11.4203 9.9016 10.8711 10.0414 10.5984 10.3216L8.79879 11.6805C6.71175 10.5661 5.42618 9.28055 4.32733 7.20854L5.64587 5.45528C5.98844 5.11307 6.11131 4.61317 5.9641 4.14413C5.6615 3.22731 5.50779 2.26533 5.50779 1.28472C5.50783 0.576318 4.93169 0 4.22355 0H1.28428C0.576141 0 0 0.576318 0 1.28468C0 9.40433 6.60368 16.01 14.7208 16.01C15.429 16.01 16.0051 15.4337 16.0051 14.7253V11.7934C16.0051 11.085 15.4289 10.5087 14.7208 10.5087Z" fill="#2149FF" />
    </svg>
    <p className="text-[14px] sm:text-[16px] m-[0px] mb-[5px] ml-[5px]">(386) 237-8200</p>
  </div>

  <div className='flex items-center mt-[10px]'>
    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.392303 1.04278C2.96897 3.0346 7.49021 6.53881 8.81907 7.63143C8.99745 7.7789 9.18879 7.85387 9.38742 7.85387C9.58565 7.85387 9.77665 7.7796 9.95464 7.63283C11.2846 6.53914 15.8059 3.0346 18.3826 1.04278C18.543 0.919011 18.5675 0.701458 18.4376 0.550141C18.1373 0.200483 17.6897 0 17.2099 0H1.56491C1.08518 0 0.637503 0.200484 0.337301 0.550175C0.207423 0.701458 0.231881 0.919011 0.392303 1.04278Z" fill="#2149FF" />
      <path d="M18.5472 2.11922C18.4085 2.06031 18.2454 2.08086 18.1301 2.17083C15.2726 4.38191 11.6257 7.21605 10.4783 8.1598C9.83427 8.69043 8.94048 8.69043 8.29498 8.1591C7.07195 7.15326 2.97657 3.97538 0.643965 2.1708C0.527837 2.08083 0.364371 2.06098 0.226865 2.11919C0.0886267 2.17779 0 2.30401 0 2.44311V11.4214C0 12.209 0.701644 12.8494 1.56452 12.8494H17.2096C18.0724 12.8494 18.7741 12.209 18.7741 11.4214V2.44311C18.7741 2.30401 18.6854 2.17746 18.5472 2.11922Z" fill="#2149FF" />
    </svg>
    <p className="text-[14px] sm:text-[16px] m-[0px] ml-[5px]">example@gmail.com</p>
  </div>
</div>
</div> */
}
