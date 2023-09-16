import React from 'react';
import Home from './pages/Home.jsx';
import Preview from './pages/Preview.jsx';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
function App() {
  const [links, setLinks] = React.useState([]);
  const [profile, setProfile] = React.useState({
    name: '',
    email: '',
    img: '',
  });

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            links={links}
            setLinks={setLinks}
            profile={profile}
            setProfile={setProfile}
          />
        }
      />
      <Route
        path='/preview'
        element={<Preview profile={profile} links={links} />}
      />
      <Route
        path='/*'
        element={
          <>
            <div className='h-screen w-full flex flex-col justify-center items-center text-2xl font-bold '>
              <Link to='/' className='underline'>
                {'<-'} Back To Home
              </Link>{' '}
              <br /> Page Not Found 404 !
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
