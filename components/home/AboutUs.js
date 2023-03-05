import React from 'react'
import Image from 'next/image'
import img from '../../public/assets/aboutusvid.jpg'

const AboutUS = () => {
  return (
    <div style={{ backgroundColor: 'rgba(249, 249, 249, 0.5)' }} className = " max-w-[1400px] m-auto">
    <div className='lg:py-[40px] lg:px-[120px] bg-[#F8F9FC] sm:pl-[40px] m-[10px] sm:py-[60px] flex flex-col sm:flex-row sm:items-center '>
        <div className='mr-[50px] md:w-[100%] max-w-[650px]'>
            <h4 className='text-[16px] md:text-[18px] font-medium' style={{ color: '#4036ED' }}>About us</h4>
            <h2 className='text-[28px] md:text-[42px] lg:text-[48px] my-[10px] font-semibold' style={{ color: '#02071E' }}>Take preparation for surgery into your own hands</h2>
            <p className='text-[14px] sm:text-[16px] mb-[10px] md:text-[18px] ' style={{ color: '#86888F' }}>Preparing your mind and body for surgery can be in your hands. Research and experience has shown that plans for lifestyle changes can produce better outcomes after surgery. Heal-Well® raises the ability to change lifestyles to a higher, personalized and more effective level by creating individualized plans designed on your specific needs.</p>
            <button className='inter text-[14px] sm:text[16px] mb-5 md:text-[18px] px-[30px] py-[10px] rounded-[5px] text-white lg:mt-5 md:mt-5 ' style={{backgroundColor:'#2149FF'}}>Know More</button>
        </div>

        <div className='lg:mt-[90px] sm:mt-[0px]  sm:min-w-[200px] max-w-[500px] relative'>
            <Image src={img} alt="" />
        </div>
    </div>
</div>
  )
}

export default AboutUS