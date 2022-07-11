import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

import Result from '../Result/Result';
import LoadingResult from '../LoadingResult/LoadingResult'; 
function ResultsList() {
  const { searchResults, isLoadingResults } = useContext(AppContext);
  
 console.log(searchResults);
  const resultsList = searchResults.map((result, index) => {
 
    return (
<div>
 
 
 
      <Result
        document={result}

        key={ index }
      />
</div>
    
    );
  });

  return (
    <div className="space-y-6">
      { resultsList.length > 0 &&
        resultsList
      }

      { (!resultsList.length || isLoadingResults ) &&
        <LoadingResult />
      }
    </div>
  );
}

export default ResultsList;