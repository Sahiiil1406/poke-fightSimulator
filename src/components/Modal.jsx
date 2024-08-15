import React from 'react';

const Modal = ({ show, handleClose, children }) => {
  return (
    <>
      {show && (
        <div className="bg-black fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div style={{background:'url(../../public/ModalBackground.png)',backgroundRepeat: 'none', backgroundSize: 'cover', backgroundPosition: 'center'}}  className=" rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-900 text-3xl"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
