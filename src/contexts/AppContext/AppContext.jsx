import React, { createContext, useState } from 'react';
import { useNavigate } from "react-router-dom"; 

  
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate(); 

  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const size =  10 ;
  const [from, setFrom] = useState(0);
  const [total, setTotal] = useState(0);
 

 

  const generateResults = async (searchTerm) => {
    console.log("ok");
setIsLoadingResults(true);

    let gptResponse;
 
  
    try {
 
      await    axios.get(`${process.env.REACT_APP_ELK_URL}/doc/_search?q=${searchTerm}&size=${size}&from=${from}`)
      .then(res => {
        
        gptResponse=res
      setTotal(gptResponse.data.hits.total.value)
         
        setIsLoadingArticle(false);
        setSearchResults(gptResponse.data.hits['hits']);
         
setIsLoadingResults(false);
       
      })

   
      console.log(gptResponse.data);
  
 
      return gptResponse.data;
    } catch (error) {
      console.log("error");
      alert('There are problems accessing the API');
      
    }
 
  };

  const getResults = async (term) => {
     
   console.log("ok");
    let results = await generateResults(term) ;
   
  };

  const getMoreResults = async (numberOfPrevResults) => {
    console.log("ok");
    // let newResults = formatResults(await generateResults(searchTerm));
    // if(total===searchResults.length &&total<from+size){
    //   return;
    // }
    // else{
    //   console.log(from,size);
    //   setFrom(from+size);
    //   let newResults = await generateResults(searchTerm);
      
    //   setSearchResults(newResults.hits.hits);
  
    // }
    if( total>from+size){
      console.log(from,size);
      setFrom(from+size);
      let newResults = await generateResults(searchTerm);
    // const data=new Array(searchResults,newResults.hits.hits)
    // data.concat
    //  console.log("dataaa",data);
    //   setSearchResults(data);
    }
   
  };

  const docsSearch = (term) => {
    if (term.trim().length > 0) {
      navigate('/results?search=' + term.trim());
  
      getResults(term.trim());
    }
  };



 

 

  return (
    <AppContext.Provider value={{
     
      searchTerm,
      setSearchTerm,
      searchResults,
      isLoadingResults,
      isLoadingArticle, 
      docsSearch,
      getMoreResults, 
      total
    }}>
      { children }
    </AppContext.Provider>
  );


};

export { AppContext, AppContextProvider };



// const generateArticleText = async (text) => {
//   let gptResponse;
  
//   setIsLoadingArticle(true);

//   try {

     
//     await    axios.get(`${process.env.REACT_APP_ELK_URL}/doc/_search?q=${text}`)
//     .then(res => {
//       gptResponse=res
//       setIsLoadingArticle(false);
//     })

// const imFeelingLucky = async (term) => {
//   if (searchTerm.trim().length > 0) {
//     navigate('/site?term=' + term.trim());

//     await getResults(term.trim());
//   }
// };
  
   

//     return gptResponse.data;
//   } catch (error) {
//     console.log("error");
//     alert('There are problems accessing the API');
//     window.location.href = '/';
//   }
// };
