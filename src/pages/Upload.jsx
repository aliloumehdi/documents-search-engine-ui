 
import React, { useRef } from 'react';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo'; 
import { AiOutlinePlus,AiFillSave } from "react-icons/ai"
import { MdDeleteForever } from "react-icons/md"
import { FaTimes } from "react-icons/fa";
import './../App.css';
import axios from 'axios';  
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Upload() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [existingFile, setExistingFile] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [metadata, setMetadata] = React.useState([]);
  const keyRef = useRef()
  const valueRef = useRef()
  // handle drag events
  const handleDrag = function(e) {
    console.log("draaage");
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = function(e) {
    console.log("dropped");
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log(e);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setExistingFile(true)

    }
  };
  const handleChange = function(e) {
    e.preventDefault();
    console.log(e.target.files);
    console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])

      setExistingFile(true)
    }
  };
  const removeSelectedFile=function(){
    setFile(null)

    setExistingFile(false)
  }
  const addIndex=function(){
     
    if(keyRef.current.value&&valueRef.current.value){
        const index={
            key:keyRef.current.value,
            value:valueRef.current.value
        }
        setMetadata([...metadata, index])
        console.log(metadata);
        keyRef.current.value = ""
        valueRef.current.value = ""
    }
  }


  const saveDoc=function(){
 
  let formData = new FormData();
  formData.append('rawdoc',file);
  formData.append('metadata',JSON.stringify(metadata))
  // ${process.env.REACT_APP_API_URL}
  axios.post(`http://localhost:3001/docs/upload`,formData).then((res)=>{
    // toast.success('Document indexed !', {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   });
    alert("Done")
  })
  }
  // const dropAttr=function(attr){
  //   metadata.splice(metadata.indexOf(attr),1)
  //   setMetadata(metadata);
  // }
  const handleDelete=(key)=>{ 
 
    setMetadata(metadata.filter(index => {
      return index.key != key
    }))
  }
    return (
        <div className="flex flex-col my-5">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-7">
          <Logo className="text-8xl"/>
  
 
       <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      {
        !existingFile?
        <input type="file" id="input-file-upload" onChange={handleChange}   />  :
        ""
        
      }   
      
      <label id="label-file-upload" htmlFor="input-file-upload"  className={dragActive ? "drag-active" : "" }>
        {
            existingFile?
            <span className="flex  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{file.name}
            
            <FaTimes className='ml-3 m-auto cursor-pointer' onClick={removeSelectedFile}></FaTimes>
            </span>
            
            :
            <div>
        
          <p>{dragActive?"Drop your document !":"Drag your document here "}</p>
          <button className={dragActive?'hide':'upload-button'}  >Upload a file </button>

        </div> 
        }
        
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form><div></div> 
    {/* <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input type="file" id="input-file-upload" onChange={handleChange}   />
      <label id="label-file-upload" htmlFor="input-file-upload"  className={dragActive ? "drag-active" : "" }>
        <div>
          <p>{dragActive?"Drop your document !":"Drag your document here "}</p>
          <button className={dragActive?'hide':'upload-button'}  >Upload a file </button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form> */}
          {/* <div className="space-x-3">
            <Button
           
              className="w-max"
            >
              Add
            </Button>
  
          </div> */}
          {
            metadata.length>0?
            <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Key</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Drop</th>
              
              </tr>
            </thead>
            <tbody>
             {metadata.map((index)=> (
                <tr className="bg-gray-100">
                <td className="border px-4 py-2">{index.key}</td>
                <td className="border px-4 py-2">{index.value}</td>
                <td className="border px-4 py-2">
                  {/* <button  className="flex bg-transparent text-red-600 hover:bg-blue-500 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded"> */}
<MdDeleteForever onClick={() =>  handleDelete(index.key)} className=" text-red-600 m-auto mr-1  cursor-pointer"></MdDeleteForever> 

{/* </button>  */}
 </td>
              
              </tr>
            ))}
              
             
            </tbody>
          </table>:''
          }
  
<div className='flex' >
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Key 
      </label>
      <input ref={keyRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
   
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Value
      </label>
      <input ref={valueRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"  />
    </div>
</div>
<div className="flex">
<button onClick={addIndex} className="flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded">
<AiOutlinePlus className="m-auto mr-1"></AiOutlinePlus> Add index
</button>
<button onClick={saveDoc} className="ml-2 flex bg-transparent hover:bg-blue-500 text-blue-700 font-semibold   py-2 px-4 border border-blue-500 hover:border-transparent rounded">
 
<AiFillSave  className="m-auto mr-1"></AiFillSave>
 Save
</button>
</div>

        </div>
  {/* <button onClick={saveDoc}>send</button> */}
      </div>
    );
  }
export default Upload;