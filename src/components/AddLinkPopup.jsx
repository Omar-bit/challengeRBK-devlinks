import React from 'react';

function AddLinkPopup({ setAddLinkPopup, setLinks, toast }) {
  const [platform, setPlatform] = React.useState('custom');
  const [link, setLink] = React.useState('');
  function addLink() {
    if (!link) {
      toast.error('Please enter a link');
      return;
    }
    if (!link.startsWith('https://')) {
      toast.error('Please enter link that starts with https://');
      return;
    }
    if (platform !== 'custom') {
      let domain = link.substring('https://'.length);
      if (domain.startsWith('www.')) {
        domain = domain.substring('www.'.length);
      }
      domain = domain.substring(0, domain.indexOf('.'));
      if (domain !== platform) {
        toast.error("This link doesn't belong to " + platform);
        return;
      }
    }
    setLinks((prev) => [...prev, { id: prev.length, link, type: platform }]);
    toast.success('Link added successfully!', {
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
    <div className='w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center bg-[#acababcb]'>
      <div className=' flex flex-col items-center gap-7 shadow-lg max-w-[450px]  w-[90%]  md:w-[45%] lg:[35%]  p-5 bg-bgColor rounded-md '>
        <h2 className='font-bold text-2xl text-primary'>Add new link</h2>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className='border border-primary w-full py-1 rounded-md font-bold'
        >
          <option value='custom'>Cutom Link</option>
          <option value='youtube'>Youtube</option>
          <option value='github'>Github</option>
          <option value='linkedin'>Linkedin</option>
        </select>
        <input
          type='text'
          placeholder='Link'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className='border border-primary w-full px-3 py-1 rounded-md font-bold'
        />
        <div className='flex items-center justify-around w-full'>
          <button
            className='border border-primary px-4 py-2 rounded-md text-primary
          hover:bg-primary hover:text-bgColor'
            onClick={addLink}
          >
            Add
          </button>
          <button
            onClick={() => setAddLinkPopup(false)}
            className='border border-[red] px-4 py-2 rounded-md text-[red]'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddLinkPopup;
