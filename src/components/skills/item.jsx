import React from 'react'
import { TiTick } from 'react-icons/ti';

function Item({name, level}) {
  return (
   
      <div className="flex gap-3 text-lg">
        <TiTick className="text-white bg-black rounded-full mt-1" />
        <div className="">
          <h1 className=" flex items-center ">{name}</h1>
          <p className="text-sm text-gray-600">{level}</p>
        </div>
      </div>

  );
}

export default Item