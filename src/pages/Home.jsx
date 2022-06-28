import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button'; 
 import { Document, Page,pdfjs   } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
function Home() {
  const { 
    searchTerm,
    docsSearch,
    imFeelingLucky,
  } = useContext(AppContext);
 
  return (
    <div className="flex flex-col w-full h-screen">
         <div>

ddddd
<Document  
file="simpe.pdf" >
  {/* <Page  /> */}
</Document>
 
</div>
      <div className="flex flex-col items-center justify-center w-full h-full space-y-7">
        <Logo className="text-8xl"/>

        <SearchBar
          className="w-5/12 h-12"
          autoFocus={ true }
        />
        
        <div className="space-x-3">
          <Button
            onClick={ () => docsSearch(searchTerm) }
            className="w-max"
          >
            Docs Search
          </Button>

          {/* <Button
            onClick={ () => imFeelingLucky(searchTerm) }
            className="w-max"
          >
            I'm Feeling Lucky
          </Button> */}
        </div>
      </div>

      {/* <div className="flex justify-between w-full px-3 py-2 text-md font-roboto text-googray-text">
        <span className="mt-auto">Don't be human.</span>
        
        <LanguageSelect />
      </div> */}
    </div>
  );
}

export default Home;
