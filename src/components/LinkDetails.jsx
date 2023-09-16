import React from 'react';
import { MdDragHandle } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { FaLink } from 'react-icons/fa';
import { useDrag, useDrop } from 'react-dnd';
const ItemType = 'LINK';
function LinkDetails({ link, index, setLinks, toast, links }) {
  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: 'LINK',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        // Logic to reorder the links array
        const newLinks = [...links];
        const [movedLink] = newLinks.splice(draggedItem.index, 1);
        newLinks.splice(index, 0, movedLink);
        setLinks(newLinks);
        draggedItem.index = index;
      }
    },
  });
  const draggingStyle = isDragging
    ? {
        opacity: 0.5, // Reduce opacity to give a "lifting" feel
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Add a shadow for depth
      }
    : {};
  let icon;

  switch (link.type) {
    case 'youtube':
      icon = <AiOutlineYoutube style={{ color: 'gray', fontSize: '20px' }} />;
      break;
    case 'github':
      icon = <AiFillGithub style={{ color: 'gray', fontSize: '20px' }} />;
      break;
    case 'linkedin':
      icon = <BsLinkedin style={{ color: 'gray', fontSize: '20px' }} />;
      break;
    default:
      icon = <TbWorldWww style={{ color: 'gray', fontSize: '20px' }} />;
  }
  function removeLink(id) {
    setLinks((links) => links.filter((link) => link.id !== id));
    toast.success('Link removed successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  }
  return (
    <div
      className='shadow-md p-1 md:p-2'
      ref={(node) => ref(drop(node))}
      style={draggingStyle}
    >
      <header className='flex justify-between text-text'>
        <p className='text-sm md:text-lg font-semibold flex items-center cursor-pointer'>
          <MdDragHandle className='mr-1' /> Link #{index + 1}
        </p>
        <p
          className='cursor-pointer hover:text-[red] text-sm md:text-lg'
          onClick={() => removeLink(link.id)}
        >
          Remove
        </p>
      </header>
      <div className='details text-text flex flex-col gap-2 '>
        <div className='mt-1'>
          <h3 className='text-sm md:text-md'>Platform</h3>
          <div className='border border-text p-1 rounded-sm '>
            <h5 className='flex items-center gap-1'>
              {icon} {link.type}
            </h5>
          </div>
        </div>
        <div className='mt-1'>
          <h3 className='text-sm md:text-md'>Link</h3>
          <div className='border border-text p-1 rounded-sm '>
            <h5 className='flex items-center gap-1'>
              <FaLink /> {link.link}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkDetails;
