import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';
import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button'; 
function Home() {
  const { 
    searchTerm,
    docsSearch
  } = useContext(AppContext);
  const navigate = useNavigate();
const upload=function (){
  navigate("upload");
}
  return ( 
    <div className="flex flex-col w-full h-screen">

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
          <Button
            onClick={upload }
            className="w-max"
          >
           Upload
          </Button>
 
        </div>
      </div>

 
    </div>
  );
}

export default Home;
