import React, { createContext, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import OpenAI from 'openai-api';

import formatResults from '../../utils/formatResults';
import { SearchTemplate, ArticleTemplate } from '../../utils/templates';
import axios from 'axios';
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  
  const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [isLoadingArticle, setIsLoadingArticle] = useState(false);
  const lastResultsString = useRef('');

 
  const generateArticleText = async (text) => {
    let gptResponse;
    
    setIsLoadingArticle(true);

    try {

      console.log(process.env);
      await    axios.get(`${process.env.REACT_APP_ELK_URL}/twitter/_search?q=${text}`)
      .then(res => {
        gptResponse=res
      })

  
      console.log(gptResponse.data);
  
      setIsLoadingArticle(false);
  
      return gptResponse.data;
    } catch (error) {
      console.log("error");
      alert('There are problems accessing the API');
      window.location.href = '/';
    }
  };

  const generateResults = async (searchTerm) => {
    const lastResults = lastResultsString.current;
console.log("Looking for results",searchTerm);
   

    let gptResponse;
    console.log(process.env);
    setIsLoadingResults(true);
    try {
      await    axios.get(`${process.env.REACT_APP_ELK_URL}/twitter/_search?q=${searchTerm}`)
      .then(res => {
        gptResponse=res
        console.log(res);
      })

   
      console.log(gptResponse);
  
      setIsLoadingArticle(false);
  
      return gptResponse.data;
    } catch (error) {
      console.log("error");
      alert('There are problems accessing the API');
      // window.location.href = '/';
    }
    // try {
    //   gptResponse = await openai.complete({
    //     engine: 'text-davinci-001',
    //     prompt: query,
    //     maxTokens: 1000,
    //     temperature: 1,
    //     topP: 1,
    //     presencePenalty: 0,
    //     frequencyPenalty: 2,
    //     bestOf: 1,
    //     n: 1,
    //     stream: false,
    //     stop: ['"""']
    //   });

    //   //console.log(gptResponse.data.choices[0].text);
      
    //   lastResultsString.current = gptResponse.data.choices[0].text;

    //   setIsLoadingResults(false);

    //   return gptResponse.data.choices[0].text;
    // } catch (error) {
    //   alert('There are problems accessing the API');
    //   window.location.href = '/';
    // }
  };

  const getResults = async (term) => {
    setSearchResults([]);

    let results = formatResults(await generateResults(term));
    let numberOfResults = results.length;

    setSearchResults(results);

    if (numberOfResults < 3) getMoreResults(numberOfResults);
  };

  const getMoreResults = async (numberOfPrevResults) => {
    let newResults = formatResults(await generateResults(searchTerm));
    let numberOfResults = numberOfPrevResults + newResults.length;

    setSearchResults(prev => [...prev, ...newResults]);

    if (numberOfResults < 3) getMoreResults(numberOfResults);
  };

  const docsSearch = (term) => {
    if (term.trim().length > 0) {
      navigate('/results?search=' + term.trim());
    
      getResults(term.trim());
    }
  };

  const imFeelingLucky = async (term) => {
    if (searchTerm.trim().length > 0) {
      navigate('/site?term=' + term.trim());

      await getResults(term.trim());
    }
  };

 

 

  return (
    <AppContext.Provider value={{
     
      searchTerm,
      setSearchTerm,
      searchResults,
      isLoadingResults,
      isLoadingArticle,
      generateArticleText,
      docsSearch,
      getMoreResults,
      imFeelingLucky,
      
    }}>
      { children }
    </AppContext.Provider>
  );


};

export { AppContext, AppContextProvider };
