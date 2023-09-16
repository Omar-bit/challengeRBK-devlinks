import devlinksLogo from '../assets/devlink.svg';
import { CgProfile } from 'react-icons/cg';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav({ view, setView }) {
  return (
    <nav className='flex items-center  justify-between'>
      <div className='logo flex  items-center gap-1'>
        <div className='logoContainer bg-primary rounded-md'>
          <img src={devlinksLogo} alt='devlinksLogo' className='w-5 md:w-7' />
        </div>
        <h3 className='text-lg  md:text-2xl font-bold'>devlinks</h3>
      </div>

      <ul className='hidden  md:flex  gap-3 md:gap-10'>
        <li
          className={`flex items-center gap-1  font-semibold text-sm md:text-lg cursor-pointer hover:opacity-80 ${
            view === 'links' ? 'text-primary' : 'text-text'
          }`}
          onClick={() => setView('links')}
        >
          <FaLink className='w-5 h-5 ' />
          Links
        </li>
        <li
          className={` flex items-center gap-1 font-semibold  text-sm md:text-lg  cursor-pointer hover:opacity-80 ${
            view === 'profile' ? 'text-primary' : 'text-text'
          }`}
          onClick={() => setView('profile')}
        >
          <CgProfile className='w-8 h-8 ' />
          Profile Details
        </li>
      </ul>
      <select
        onChange={(e) => setView(e.target.value)}
        value={view}
        className='md:hidden'
      >
        <option value='links'>Links</option>
        <option value='profile'>Profile Details</option>
      </select>
      <Link
        to='/preview'
        className='border border-primary p-1 md:py-1 md:px-3 rounded-md text-primary text-sm md:text-lg font-semibold hover:opacity-80'
      >
        Preview
      </Link>
    </nav>
  );
}
export default Nav;
