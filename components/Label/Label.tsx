import React from 'react';

export const Label = ({children}: {children:React.ReactNode}) => {
  return <label className="text-gray-500 font-semibold text-base">{children}</label>;
};
