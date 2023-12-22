import React, { useState } from 'react'

function Checkout() {
    const [showAddressInput, setShowAddressInput] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleCheckoutClick = () => setShowAddressInput(true);
  const handleCancelAddressInput = () => setShowAddressInput(false);
  const handleSaveAddress = () => {
    // Implement saving address logic here
    setShowAddressInput(false);
  };

  const handleDeleteClick = () => setShowDeleteConfirmation(true);
  const handleCancelDeleteConfirmation = () => setShowDeleteConfirmation(false);
  const handleDeleteItem = () => {
    // Implement item deletion logic here
    setShowDeleteConfirmation(false);
  };
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-IN');

  return (
    <div className="checkout-container h-75 w-75 rounded-lg border border-gray-200 flex flex-col justify-between sm:p-10 sm:m-20 overflow-y-hidden m-14 p-5">
      <div className="summary-container px-4 py-2 flex items-center justify-between">
        <span className="text-black font-semibold">TOTAL: ₹ 2000</span>
        <button
          className="checkout-button bg-black text-white px-4 py-2 rounded-md font-semibold"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>

      {showAddressInput && (
        <div className="address-input-container px-4 py-2 mt-4 flex flex-col">
          <label className="text-gray-600 mb-2">Enter Address:</label>
          <input type="text" className="rounded-md border border-gray-300 px-2 py-1" />
          <div className="button-container mt-4 flex justify-end">
            <button
              className="cancel-button px-4 py-2 rounded-md mr-2 bg-black border border-gray-300 text-white"
              onClick={handleCancelAddressInput}
            >
              Cancel
            </button>
            <button
              className="save-button bg-black text-white px-4 py-2 rounded-md"
              onClick={handleSaveAddress}
            >
              Save
            </button>
          </div>
        </div>
      )}

<div className="item-details-container px-4 py-2 mt-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-black font-bold mb-1">Question Title</span>
          <span className="text-black  font-bold mb-1">MODULE :  Name Of Module </span>
          <span className="text-black font-bold">Date:  {formattedDate} </span>
        </div>


        <div className="actions-container flex items-center">
          <span className="mr-4 text-white bg-black p-2 rounded-md">Quantity: 1</span>
          <button
            className="delete-button bg-black text-white px-4 py-2 rounded-md"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>


        


        {showDeleteConfirmation && (
        <div className="delete-confirmation-modal fixed top-0 left-0 w-full h-screen bg-gray-900 opacity-75 flex items-center justify-center z-50">
          <div className="confirmation-card bg-white rounded-lg p-4">
            <span className="text-gray-600 font-semibold mb-2">Delete Book From Cart?</span>
            <div className="button-container mt-4 flex justify-end">
              <button
                className="cancel-button px-4 py-2 rounded-md mr-2 text-gray-600 border border-gray-300"
                onClick={handleCancelDeleteConfirmation}
              >
                Cancel
              </button>
              <button
                className="delete-button bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleDeleteItem}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        )}



    


        </div>
      </div>
  )
}

export default Checkout