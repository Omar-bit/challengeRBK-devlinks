import React from 'react';
import LinkDetails from './LinkDetails';
import AddLinkPopup from './AddLinkPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function LinksForm({ links, setLinks }) {
  const [addLinkPopup, setAddLinkPopup] = React.useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      {/* Rest of your code... */}

      <div className=' flex-1  p-2 flex flex-col gap-10'>
        <header className='flex flex-col gap-3'>
          <h2 className='text-xl md:text-3xl font-bold tracking-normal	 '>
            Cutomize your links
          </h2>
          <p className='text-sm md:text-md text-text '>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button
            className='border border-primary rounded-md p-1 md:py-2 text-primary font-bold hover:bg-primary hover:text-bgColor mt-2 md:mt-5'
            onClick={() => setAddLinkPopup(true)}
          >
            + Add new link
          </button>
        </header>
        <div className='links p-3 flex flex-col gap-3 max-h-[50vh] overflow-y-auto'>
          {links.map((link, index) => (
            <LinkDetails
              key={index}
              link={link}
              index={index}
              setLinks={setLinks}
              toast={toast}
              links={links}
            />
          ))}
        </div>
        {addLinkPopup && (
          <AddLinkPopup
            setAddLinkPopup={setAddLinkPopup}
            setLinks={setLinks}
            toast={toast}
          />
        )}
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
    </DndProvider>
  );
}

export default LinksForm;
