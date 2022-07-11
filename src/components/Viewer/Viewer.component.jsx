// import React, { Fragment, useState } from 'react'

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { Modal } from 'react-bootstrap';  
// function Viewer() {

//     const [numPages, setNumPages] = useState(null);
// 	const [pageNumber, setPageNumber] = useState(1);
//   const [showModal, setShowModal] = useState(second)
  
//     isShowModal = (status) => {  
//       handleClose();  
//         this.setShowModal(  status  );  
//     }  
  
//     handleClose = () => {  
//         this.props.onPopupClose(false);  
//     }  
// 	const onDocumentLoadSuccess = ({ numPages }) => {
// 		setNumPages(numPages);
// 	};

// 	const goToPrevPage = () =>
// 		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// 	const goToNextPage = () =>
// 		setPageNumber(
// 			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
// 		);
//   return (
//     <div>

// <Fragment>  
//                 <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
//                     size="lg"  
//                     aria-labelledby="contained-modal-title-vcenter"  
//                     centered  
//                 >  
//                     <Modal.Header closeButton>  
//                         <Modal.Title id="sign-in-title">  
//                             React Modal Pop up Example  
//                          </Modal.Title>  
//                     </Modal.Header>  
//                     <Modal.Body>  
//                         <hr />  
//                         <div className="signUp">  
//                             <p>Want to close the pop up?<button type="button" className="link-button" onClick={() => this.isShowModal(true)}> Close</button></p>  
//                         </div>  
//                     </Modal.Body>  
  
//                 </Modal >  
//             </Fragment > 
//     <nav> 
//                     <button onClick={goToPrevPage}>Prev</button>
//                     <button onClick={goToNextPage}>Next</button>
//                     <p>
//                         Page {pageNumber} of {numPages}
//                     </p>
//                 </nav>
    
//                 <Document
//                     file="FastPHP.pdf"
//                     onLoadSuccess={onDocumentLoadSuccess}
//                 >
//                     <Page pageNumber={pageNumber} />
//                 </Document>
//     </div>
//   )
// }

// export default Viewer











import { React, useState } from "react"; 
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import "./custom-popup.style.css";
// import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
const ViewerComponent = (document) => {
    
       const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
  
  
   
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

  
 

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
    <div id="pdfviewer">
        <Viewer 
         initialPage={10}
        fileUrl={document.document['_source'].fileUrl} /> 
    </div>
    </Worker>
  );
};

 

export default ViewerComponent;













// 
{/* <div
       
       
>
 <nav className="flex"> 
                 <button className="ml-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={goToPrevPage}>
                    
                 <FaArrowLeft  ></FaArrowLeft>
                
                     </button>
                 <button   className="mr-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={goToNextPage}>
                 <FaArrowRight></FaArrowRight>
                   
                     </button>
                 
             </nav>

             <Document
                 file={document.document['_source'].fileUrl}
                 onLoadSuccess={onDocumentLoadSuccess}
             >
                 <Page pageNumber={pageNumber} />
            </Document>
            <div className="flex">
            <p className="m-auto">
                     Page {pageNumber} of {numPages}
                 </p>
            </div>
       
</div> */}