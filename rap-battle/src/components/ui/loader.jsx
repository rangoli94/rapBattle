import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
