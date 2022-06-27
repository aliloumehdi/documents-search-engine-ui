import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineFilePdf } from "react-icons/ai"
import {MdOutlineOpenInNew}from "react-icons/md"
function Result({ document }) {
  let [titleColor, setTitleColor] = useState('text-goolink');

  const handleClick = () => {
    setTitleColor('text-goolink-visited');
  };
  const truncate= (str)=> {
    return str.length > 10 ? str.substring(0, 120) + "..." : str;
}
  return (
    // <div classNameName="w-6/12 text-left font-roboto">
      
    //   <Link
    //  to={"/site"}
    //     target="_blank"
    //     classNameName={
    //       titleColor +
    //       ' text-xl'
    //     }
    //     onClick={ handleClick }
    //     onContextMenu={ handleClick }
    //   >
    //     { document._source.filename }
    //   </Link>

    //   <p classNameName="text-md text-googray-text">
    //     { document._source.content }
    //   </p>
    // </div>
    <div className="my-3 max-w-sm w-full lg:max-w-full lg:flex">
  <div className="border border-gray-400 flex h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"   >
     

      <AiOutlineFilePdf className='m-auto' color='red' size={70}></AiOutlineFilePdf>
    
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      
      <div className="text-gray-900 font-bold text-xl mb-2">{document._source.fileName}</div>
      <p className="text-gray-700 text-base">{truncate(document._source.content)}</p>
    </div>
  
      
      <div className="flex">
      <button  className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-auto" >
<MdOutlineOpenInNew className="m-auto"></MdOutlineOpenInNew>  
</button>
      </div>
    
  </div>
</div>
  );
}

export default Result;


// {
 
//   "fileName": "name.txt"  ,
//   "content":   "conteeeeeeeeeeeeeeeeeeeeent",
//   "mimetype":  "application/pdf" ,
//   "fileUrl":  "localhost:3000/public/uploads/docs/123.pdf" ,
//   "meatadata":  {
//   	"name":"name",
//   	"val":"value",
//   	"x":"y"
//   } ,
//   "uuid":  "45612315643123456" 
// }
