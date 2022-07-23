import React, { useState } from 'react';  
import {MdOutlineOpenInNew,MdOutlineInfo}from "react-icons/md" 
import { Modal,CloseButton  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; 
import '../../App.css'
import ViewerComponent from '../Viewer/Viewer.component';

function Result({ document }) {
 
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const onCloseModal = () => {
    console.log("sssssssss");
    setShowDetails(false)
  } 
 
  const handleShow = () => setShow(true); 
  const handleShowDetails = () => {
 
    setShowDetails(true)}; 

 
  const truncate= (str)=> { 
    return str.length > 1000 ? str.substring(0, 120) + "..." : str;
}
 
  return (
 
    <div className="my-3 max-w-sm w-full lg:max-w-full lg:flex">
  <div className="thumbnail border-gray-400 flex h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"   >
     
<img src={"http://localhost:3001/tumbs/"+document._source.uuid+".jpg"} alt="tumb"  className='m-auto'/>
      {/* <AiOutlineFilePdf className='m-auto' color='red' size={70}></AiOutlineFilePdf> */}
    
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      
      <div className="text-gray-900 font-bold text-xl mb-2">{document._source.fileName}</div>
      <p className="text-gray-700 text-base">{truncate(document._source.content)}</p>
    </div>
  
      
      <div className="flex">
      <button   onClick={handleShowDetails} className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-auto" >
<MdOutlineInfo  className="m-auto"></MdOutlineInfo>  
 {
  showDetails?<Modal backdrop={true}   
  // onHide={() => setShowDetails(false)}
  // onHide={() => setShowDetails(false)}
  
  // onClose={handleShowDetails}
 show={showDetails}>
<Modal.Header   >
  <Modal.Title>Details</Modal.Title>
  <button  onClick={onCloseModal} >dd</button>
 
</Modal.Header>
<Modal.Body>
<table className="table-auto mx-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">Key</th>
        <th className="px-4 py-2">Value</th>
      
      </tr>
    </thead>
     <tbody>
     {JSON.parse(document?._source?.metadata)?.map((index)=> (
        <tr className="bg-gray-100">
        <td className="border px-4 py-2">{index.key}</td>
        <td className="border px-4 py-2">{index.value}</td>
      
      
      </tr>
    ))}
      
     
    </tbody>  
  </table>
</Modal.Body>

</Modal>:''
 }
         
</button>
      <button   onClick={handleShow} className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-auto" >
<MdOutlineOpenInNew  className="m-auto"></MdOutlineOpenInNew>  
 
         <Modal  dialogClassName="modal-viewer"
           onHide={() => setShow(false)}
          // onClose={handleShow}
         show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{document?._source?.fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewerComponent  document={document}></ViewerComponent>
        </Modal.Body>
     
      </Modal>
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
