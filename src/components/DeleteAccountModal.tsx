import React from "react";

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        
        <h2 className="text-xl font-semibold text-black mb-3">
          Delete Account
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border text-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white font-semibold"
          >
            Yes, Delete
          </button>

        </div>
      </div>

    </div>
  );
};

export default DeleteAccountModal;