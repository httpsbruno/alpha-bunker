import { useState } from 'react';

interface PropTypes {
  placeholder: string;
  type: 'text' | 'password' | 'email' | 'data'
}

/**
 * Archive: src/components/Input.tsx
 *
 * Description: Input component
 *
 * Date: 2022/07/22
 *
 * Author: Athos e Bruno
 */

export const Input = ({
  placeholder,
  type,
}: PropTypes) => {
  const [text, setText] = useState('');
    
  return (
    <div className="m-1">
      <input type={type} placeholder={placeholder} className="box-border flex flex-row items-center p-2 w-64 h-8 bg-gray-100 rounded flex-none order-none flex-grow-0" onChange={(e)=>setText(e.target.value)} value={text}/>
      <div className="h-6">
        {text && <p className='text-input-inactive'>{placeholder}</p>}
      </div>
    </div>
  );
};




