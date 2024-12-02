import React from 'react';

function SubmitButton({ text }) {
  return (
    <div className="flex justify-center mt-8 mb-4">
      <button
        type="submit"
        className="bg-[#19c1ce] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
