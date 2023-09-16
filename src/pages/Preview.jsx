import { Link } from 'react-router-dom';
import LinkEl from './../components/Link';
function Preview({ profile, links }) {
  return (
    <>
      <div className='fixed bottom-5 left-5 border-4 p-2  border-primary rounded-lg '>
        <h3 className=' text-center font-semibold'>
          Coded by Omar Bouassida <br /> With Love ✨
        </h3>
      </div>
      <div className='bg-primary w-[100vw] h-60 absolute top-0 left-0 rounded-b-3xl p-5  z-[-1]'>
        <div className='flex justify-between items-center p-3 bg-bgColor rounded-md'>
          <Link
            to='/'
            className='text-sm md:text-md px-3 py-1 md:px-4 border md:py-2 rounded-md border-primary text-primary'
          >
            Back to Editor
          </Link>
          <button className=' text-sm md:text-md px-3 md:px-4  bg-primary text-bgColor py-1 md:py-2 rounded-md'>
            Share Link
          </button>
        </div>
      </div>
      <div className=' bg-bgColor rounded-lg min-w-[70%]  md:min-w-[22vw] p-5 absolute left-[50vw] top-[50vh]  translate-x-[-50%] translate-y-[-30vh] shadow-lg flex flex-col gap-5 '>
        <div className='profile w-full flex flex-col items-center gap-2'>
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
        <div className='flex flex-col gap-3  max-h-[40vh]  overflow-y-auto'>
          {links?.map((link, index) => (
            <LinkEl key={index} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Preview;
