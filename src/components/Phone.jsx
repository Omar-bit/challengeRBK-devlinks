import React from 'react';
import phoneImg from '../assets/phone.png';
import Link from './Link';
function Phone({ links, setLinks, profile }) {
  return (
    <div className='hidden md:flex   justify-center items-center  flex-1 min-h-[80vh]'>
      <div className='relative  phone  flex items-center  justify-center w-[300px] lg:w-[45%]  '>
        <img src={phoneImg} alt='phoneImg' className=' w-full' />
        <div className='phoneContent  absolute left-[8%]   w-[85%] flex flex-col items-center gap-10 '>
          <div className=' flex flex-col items-center w-full gap-1'>
            {profile.img && (
              <img
                src={profile.img}
                alt={profile.name}
                className='w-24 h-24 object-cover	 rounded-full border-4 border-primary'
              />
            )}
            {!profile.img && (
              <div className='w-28 h-28 bg-text rounded-full border-4 border-primary'></div>
            )}
            {profile.name && (
              <h3 className='font-bold text-2xl'>{profile.name}</h3>
            )}
            {!profile.name && (
              <div className='w-[80%] py-2 rounded-md bg-text'></div>
            )}
            <h5 className='  font-thin text-md text-text'>{profile.email}</h5>
            {!profile.name && (
              <div className='w-[80%] py-2 rounded-md bg-text'></div>
            )}
          </div>
          <div className='flex flex-col justify-center items-center gap-3 max-h-[40vh]  overflow-y-auto w-full'>
            {links.map((link, index) => (
              <Link key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Phone;
