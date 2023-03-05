import React from 'react'
import Image from 'next/image'
import Rim from '../../public/assets/Rim.png'
import Royo from '../../public/assets/Roy.png'

const Team = () => {
  return (
    <div className='max-w-[1400px]  m-auto lg:py-[40px] lg:px-[120px] sm:px-[40px] sm:py-[60px]'>
    <div>
        <h4 className='text-[16px] md:text-[18px] font-medium text-center' style={{ color: '#00BC50' }}>Team</h4>
        <h2 className='text-[28px] md:text-[42px] lg:text-[48px] my-[10px] font-semibold text-center' style={{ color: '#02071E' }}>Our Team</h2>
        <p className='text-[14px] sm:text-[16px] md:text-[18px] text-center' style={{ color: '#86888F' }}>We are a team of Diverse Medical and Non Medical Experts</p>
        <div className='sm:flex justify-center sm:mt-[40px]'>
            <div className='p-[20px] rounded-[15px] lg:flex flex-row items-center justify-between' style={{ backgroundColor: '#F8F9FC' }}>
                <div className='sm:w-[200px] lg:w-full mr-[20px] lg:min-w-[180px] lg:max-w-[260px]'>
                    <Image src={Rim} alt="" />
                </div>
                <div className='max-w-[300px]'>
                    <h5 className='text-[18px] font-semibold'>FAYe RIM</h5>
                    <span className='text-[16px]' style={{ color: '#86888F' }}>MD</span>
                    <p className='mt-[10px] text-[14px]' style={{ color: '#475467' }}>Medical Director, Pre-Surgical Chronic Pain Management Department of Anesthesia, Critical Care, and Pain Management Hospital for Special Surgery New York, NY Assistant Clinical Professor Weill Cornell Medical College New York, NY</p>
                </div>
            </div>

            <div className='p-[20px] rounded-[15px] mt-[20px] sm:mt-[0px] sm:ml-[30px] lg:flex flex-row items-center justify-between' style={{ backgroundColor: '#F8F9FC' }}>
                <div className='sm:w-[200px] lg:w-full mr-[20px] lg:min-w-[180px] lg:max-w-[260px]'>
                    <Image src={Royo} alt="" />
                </div>
                <div className='max-w-[300px]'>
                    <h5 className='text-[18px] font-semibold'>Marc B. Royo</h5>
                    <span className='text-[16px]' style={{ color: '#86888F' }}>MD, MBA</span>
                    <p className='mt-[10px] text-[14px]' style={{ color: '#475467' }}>Assistant Professor of Anesthesiology and Perioperative Medicine Medical Director, Anesthesia Preoperative Optimization Clinic Associate Vice Chair for Quality and Patient Safety Department of Anesthesiology and Perioperative Medicine Penn State Milton S. Hershey Medical Center</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team