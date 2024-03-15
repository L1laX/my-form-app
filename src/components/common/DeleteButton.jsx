import React from 'react';
import clsx from 'clsx';
const DeleteButton = ({
  name,
  onClick,
  className,
  isDelete,
  deleteItem,
  id,
}) => {
  return (
    <button
      className={`bg-teal-500 hover:bg-teal-700 text-white px-2 py-0  font-bold rounded-3xl  ${className} `}
      onClick={onClick}
    >
      {name}
      <span
        className={clsx(
          `delete ml-5 text-sm text-white border py-1 px-2 rounded-full hover:bg-teal-900 ${
            isDelete ? '' : 'hidden'
          }`
        )}
        onClick={() => deleteItem(id)}
      >
        x
      </span>
    </button>
  );
};

export default DeleteButton;
