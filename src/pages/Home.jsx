import React from 'react';
import Nav from '../components/Nav';
import Phone from '../components/Phone';
import LinksForm from '../components/LinksForm';
import ProfileForm from '../components/ProfileForm';
function Home({ links, setLinks, profile, setProfile }) {
  const [view, setView] = React.useState('links');
  return (
    <>
      <Nav view={view} setView={setView} />
      <section className='flex gap-10 justify-center  items-stretch  mt-5  p-2 md:p-5  lg:py-10 lg:px-20'>
        <Phone links={links} setLinks={setLinks} profile={profile} />
        {view === 'links' ? (
          <LinksForm links={links} setLinks={setLinks} />
        ) : (
          <ProfileForm profile={profile} setProfile={setProfile} />
        )}
      </section>
    </>
  );
}
export default Home;
