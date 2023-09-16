import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsImage } from 'react-icons/bs';

function ProfileForm({ profile, setProfile }) {
  const [name, setName] = React.useState(profile.name || '');
  const [email, setEmail] = React.useState(profile.email || '');
  const [img, setImg] = React.useState(profile.img || null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match(/^image\//)) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImg(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImg('');
    }
  };

  function modifyProfileInfos() {
    if (!name) {
      toast.error('Name required!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    setProfile({ ...profile, name, email, img });
    toast.success('Inormations modified successfully!', {
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
    <div className='flex-1  p-2 flex flex-col gap-4 md:gap-14'>
      <header className='flex flex-col gap-3'>
        <h2 className='text-xl md:text-3xl font-bold tracking-normal	 '>
          Profile Details
        </h2>
        <p className='text-sm md:text-md text-text '>
          Add your details to create a personal touch to your profile
        </p>
      </header>
      <div className='form flex flex-col items-center gap-5  p-3 '>
        <div className='flex w-full items-center'>
          <label className='text-sm md:text-md  w-[35%] text-text'>
            Profile picture
          </label>
          <div className='w-[65%] md:flex-1 flex gap-1 items-stretch'>
            {' '}
            <label
              htmlFor='img'
              className='relative border w-36 rounded-md   cursor-pointer overflow-hidden'
            >
              <div
                className='opacity-0 w-full absolute top-0 left-0 bg-[#b7b7b77e] object-fit aspect-square z-10 hover:opacity-100 flex flex-col justify-center items-center text-bgColor
              '
              >
                <BsImage className='' />
                <p>Change Image</p>
              </div>
              <img
                src={
                  img
                    ? img
                    : 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png'
                }
                alt='User uploaded'
                className=' min-w-[100%] object-fit aspect-square  	'
              />
            </label>
            <input
              id='img'
              name='img'
              type='file'
              className=' border-2 border-primary rounded-md px-4 py-2  w-[50%] hidden'
              placeholder='img url'
              onChange={handleImageChange}
            />
            <p className='text-[10px] md:text-sm   w-[40%] text-text'>
              Image must be befow 1024*1024px <br /> Use PNG , JPG or BMP
              format.
            </p>
          </div>
        </div>
        <div className='flex w-full items-center'>
          <label className='text-sm md:text-md  w-[35%] text-text'>Name*</label>
          <input
            type='text'
            className=' border-2 border-primary rounded-md p-1 text-sm md:text-md md:px-4 md:py-2  flex-1 '
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex w-full items-center'>
          <label className='text-sm md:text-md  w-[35%]  text-text'>
            Email
          </label>
          <input
            type='text'
            className=' border-2 border-primary rounded-md p-1 text-sm md:text-md md:px-4 md:py-2  flex-1 '
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={modifyProfileInfos}
          className='py-2 px-3 text-sm md:text-md md:py-2 md:px-4 bg-primary  text-bgColor rounded-md hover:opacity-80 self-end mt-5	'
        >
          Save
        </button>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default ProfileForm;
