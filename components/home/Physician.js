import React from "react";
import Image from 'next/image'
import img from '../../public/assets/youngphy.jpg'
const Physician = () => {
  return (
<div className="max-w-[1400px] m-auto">
<div className=" lg:py-[40px] lg:px-[120px] bg-[#F8F9FC]  m-3 sm:pl-[40px]  sm:py-[60px] " >
<h2 className='text-[20px] md:text-[42px] lg:text-[35px] my-[10px] font-bold text-center' style={{ color: '#050F3E' }}>A Program For Physicians By GPMS.</h2>
    <div className=' flex flex-col justify-between sm:flex-row sm:items-center'>
        <div className='mr-[50px] md:w-[100%] max-w-[650px]'>
            <h4 className='text-[16px] md:text-[18px] font-medium' style={{ color: '#4036ED' }}>Physician Services</h4>
            <h2 className='text-[28px] md:text-[42px] lg:text-[35px] my-[10px] font-semibold' style={{ color: '#02071E' }}>Treat Well® Involves</h2>
            <p className='text-[14px] sm:text-[16px] mb-[10px] md:text-[18px] lg:mr-5 ' style={{ color: '#86888F' }}>Treat-Well® identified three important areas that are universally accepted to improve the outcomes of surgery. Each area can be expanded in greater detail based on your answers to feedback questions.</p>
        </div>

        <div className='lg:mt-[90px] sm:mt-[0px]  sm:min-w-[100px] max-w-[370px] relative'>
            <Image src={img} alt="" />
        </div>
    </div>
</div>




<div className="  lg:py-[40px] lg:px-[120px] sm:px-[40px] sm:py-[100px] mx-[5px] sm:grid grid-cols-2 gap-[40px] md:grid-cols-3 md:gap-[50px]">
    <div className='rounded-[8px] p-[15px] flex flex-col items-center text-center relative mt-[40px] sm:mt-[0px] ' style={{ backgroundColor: '#071555' }}>
                <h4 className='text-[16px] sm:text-[18px] md:text-[20px] font-semibold m-[10px] text-white ' >Education</h4>
                <p className='text-[14px] sm:text-[16px] lg:text-[13px] text-white'>The importance of education is essential for the well-being of patients. Physicians need to be knowledgeable to diagnose medical diseases for patients for the best outcome</p>
                
            </div>

            <div className='rounded-[8px] p-[15px] flex flex-col items-center text-center relative mt-[40px] sm:mt-[0px]' style={{ backgroundColor: '#071555' }}>
                <h4 className='text-[16px] sm:text-[18px] md:text-[20px] font-semibold m-[10px]  text-white' >Research</h4>
                <p className='text-[14px] sm:text-[16px] lg:text-[13px]  text-white'>Research is critical in discovering new treatment options to improve patients outcomes by preventing severe health consequences to apply effective treatments and interventions</p>
               
            </div>

            <div className='rounded-[8px] p-[15px] flex flex-col items-center text-center relative mt-[50px] sm:mt-[0px]' style={{ backgroundColor: '#071555' }}>
                <h4 className='text-[16px] sm:text-[18px] md:text-[20px] font-semibold m-[10px]  text-white' >Outreach</h4>
                <p className='text-[14px] sm:text-[16px]  lg:text-[13px] text-white' >Physicians need to have a strong foundation of surgical and anesthesia principles. They must work collaboratively to ensure the best possible outcomes for their patients.</p>
        
            </div>
    </div>
</div>



  );
};

export default Physician;
