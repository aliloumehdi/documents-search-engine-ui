import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

import Result from '../Result/Result';
import LoadingResult from '../LoadingResult/LoadingResult'; 
function ResultsList() {
  const { searchResults, isLoadingResults,searchTerm } = useContext(AppContext);
  
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

      {/* { (!resultsList.length || isLoadingResults ) &&
        <LoadingResult />
      } */}
         { (  isLoadingResults ) &&
        <LoadingResult />
      }
         { ( resultsList.length==0) &&
       <div className='row flex'>
  <p className='col-7'> Aucun résultat trouvé pour (<strong>{searchTerm}</strong>)</p>
 <svg class="col-5" role="img" aria-label="Search" xmlns="http://www.w3.org/2000/svg" width="120" height="120"
  viewBox="0 0 120 120"> <g xmlns="http://www.w3.org/2000/svg" fill="none" 
  fill-rule="evenodd"><path fill="#FFF" d="M-968-376H320v2445H-968z"></path><path d="M1 1h120v120H1z">
    </path><path fill="#E0E0E0" d="M113.667 7.667v2.666a.667.667 0 1 1-1.334 0V7.667h-2.666a.667.667 0 0 1 0-1.334h2.666V3.667a.667.667 0 1 1 1.334 0v2.666h2.666a.667.667 0 0 1 0 1.334h-2.666zM90.667 22.667v2.666a.667.667 0 0 1-1.334 0v-2.666h-2.666a.667.667 0 0 1 0-1.334h2.666v-2.666a.667.667 0 0 1 1.334 0v2.666h2.666a.667.667 0 0 1 0 1.334h-2.666z"></path><path fill="#A6A6A6" d="M104.886 48l3.77 3.771a1.333 1.333 0 0 1-1.885 1.886L103 49.886l-3.771 3.77a1.333 1.333 0 1 1-1.886-1.885L101.114 48l-3.77-3.771a1.333 1.333 0 1 1 1.885-1.886L103 46.114l3.771-3.77a1.333 1.333 0 1 1 1.886 1.885L104.886 48z"></path><path fill="#E0E0E0" d="M90.943 115l1.885 1.886a.667.667 0 0 1-.942.942L90 115.943l-1.886 1.885a.667.667 0 1 1-.942-.942L89.057 115l-1.885-1.886a.667.667 0 0 1 .942-.942L90 114.057l1.886-1.885a.667.667 0 1 1 .942.942L90.943 115zM48.943 90l1.885 1.886a.667.667 0 0 1-.942.942L48 90.943l-1.886 1.885a.667.667 0 0 1-.942-.942L47.057 90l-1.885-1.886a.667.667 0 0 1 .942-.942L48 89.057l1.886-1.885a.667.667 0 0 1 .942.942L48.943 90z"></path><path fill="#A6A6A6" d="M30.886 93l3.77 3.771a1.333 1.333 0 1 1-1.885 1.886L29 94.886l-3.771 3.77a1.333 1.333 0 0 1-1.886-1.885L27.114 93l-3.77-3.771a1.333 1.333 0 1 1 1.885-1.886L29 91.114l3.771-3.77a1.333 1.333 0 1 1 1.886 1.885L30.886 93zM10.2 8.314l3.77 3.77a1.333 1.333 0 0 1-1.885 1.887l-3.771-3.772-3.772 3.772a1.333 1.333 0 1 1-1.885-1.886l3.771-3.771-3.771-3.772a1.333 1.333 0 1 1 1.885-1.885l3.772 3.771 3.77-3.771a1.333 1.333 0 1 1 1.887 1.885l-3.772 3.772z"></path><path fill="#767676" d="M62.414 62.414c-7.81 7.81-20.474 7.81-28.284 0-7.81-7.81-7.81-20.474 0-28.284 7.81-7.81 20.474-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.284zM70.9 70.9c12.497-12.496 12.497-32.758 0-45.254-12.496-12.497-32.758-12.497-45.254 0-12.497 12.496-12.497 32.758 0 45.254 12.496 12.497 32.758 12.497 45.254 0zm7.072-4.242a32.875 32.875 0 0 1-4.95 6.364 32.875 32.875 0 0 1-6.364 4.95l18.385 18.384a8 8 0 1 0 11.313-11.313L77.971 66.657z"></path><path stroke="#3C3C3C" stroke-width="12" d="M66.657 66.657c-10.154 10.153-26.616 10.153-36.77 0-10.153-10.154-10.153-26.616 0-36.77"></path><path fill="#3C3C3C" d="M73.02 73.02a32.875 32.875 0 0 1-6.363 4.95l18.385 18.385a8 8 0 0 0 11.313 0L73.021 73.021z"></path><path class="fc3450bb" d="M45.444 48.272l-5.657 5.657a2 2 0 1 0 2.828 2.828l5.657-5.656 5.657 5.656a2 2 0 1 0 2.828-2.828l-5.656-5.657 5.656-5.657a2 2 0 1 0-2.828-2.828l-5.657 5.657-5.657-5.657a2 2 0 1 0-2.828 2.828l5.657 5.657z"></path></g></svg>
       
       </div>
      }
    </div>
  );
}

export default ResultsList;