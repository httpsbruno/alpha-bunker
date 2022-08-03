import { useState } from 'react';

interface PropTypes {
  placeholder: string;
  status: boolean;
}

/**
 * Archive: src/components/InputAgency.tsx
 *
 * Description: Input Agency component
 *
 * Date: 2022/07/22
 *
 * Author: Athos
 */

export const InputAgency = ({
  placeholder,
  status
}: PropTypes) => {
  const [text, setText] = useState('');
    
  if(status){
    return (
      <div className="m-1">
        <input type="text" disabled={status} className="box-border flex flex-row items-center p-2 w-24 h-8 bg-gray-400 rounded flex-none order-none flex-grow-0" onChange={(e)=>setText(e.target.value)} value={text}/>
        <div>
          <p className='w-10 h-3 not-italic font-normal p-0 text-gray-500 flex-none flex-grow-0 text-sm '>{placeholder}</p>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="m-1">
        <input type="text" disabled={status} className="box-border flex flex-row items-center p-2 w-24 h-8 bg-gray-100 rounded flex-none order-none flex-grow-0" onChange={(e)=>setText(e.target.value)} value={text}/>
        <div>
          <p className='w-10 h-3 not-italic font-normal p-0 text-gray-500 flex-none flex-grow-0 text-sm '>{placeholder}</p>
        </div>
      </div>
    );
  }
};




