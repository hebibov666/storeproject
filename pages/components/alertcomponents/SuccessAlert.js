import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Alert(){
    const notify = () => toast("User successfully updated!");

    return (
      <div className='fixed top-0 left-0 w-full'>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
  export default Alert