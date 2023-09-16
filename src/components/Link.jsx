import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

function Link({ link }) {
  let icon;
  let color;
  let name;
  switch (link.type) {
    case 'youtube':
      name = 'youtube';
      icon = <AiOutlineYoutube style={{ color: 'white', fontSize: '25px' }} />;
      color = '#ff0000';
      break;
    case 'github':
      name = 'github';
      icon = <AiFillGithub style={{ color: 'white', fontSize: '25px' }} />;
      color = '#191919';
      break;
    case 'linkedin':
      name = 'linkedin';
      icon = <BsLinkedin style={{ color: 'white', fontSize: '25px' }} />;
      color = '#2D69FF';
      break;
    default:
      icon = <TbWorldWww style={{ color: 'white', fontSize: '25px' }} />;
      color = 'gray';
      name = 'custom';
      if (link.link.startsWith('https://www')) {
        name = link.link.substring('https://www.'.length);
      } else {
        name = link.link.substring('https://'.length);
      }
      name = name.substring(0, name.lastIndexOf('.'));
  }
  function redirectToLink(link) {
    window.open(link, '_blank');
  }
  return (
    <div
      className={`flex items-center justify-between w-full border rounded-md p-2  cursor-pointer hover:opacity-80 overflow-x-hidden overflow-y-hidden `}
      style={{ backgroundColor: color, borderColor: color }}
      onClick={() => redirectToLink(link.link)}
    >
      <div className='link flex items-center  gap-2'>
        {icon}
        <h4 className='text-[white] text-sm'>{name}</h4>
      </div>
      <HiOutlineArrowSmRight />
    </div>
  );
}
export default Link;
