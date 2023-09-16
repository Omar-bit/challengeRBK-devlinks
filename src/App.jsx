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
        path='preview'
        element={<Preview profile={profile} links={links} />}
      />
    </Routes>
  );
}

export default App;
