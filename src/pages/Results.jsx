import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import SearchHeader from '../components/SearchHeader/SearchHeader';
import ResultsList from '../components/ResultsList/ResultsList';
import Button from '../components/Button/Button';

function Results() {
  console.log("entreed here");
  const { isLoadingResults, getMoreResults,total } = useContext(AppContext);

  return (
    <div className="w-full h-screen">
      <SearchHeader />

      <div className="pb-6 mt-2 text-left pl-44">
        <div className="mb-6 text-sm text-googray">
          {'About '+total+' results'}
        </div>
        { !isLoadingResults &&
        <ResultsList />
        }
        { !isLoadingResults &&
          <Button
            onClick={ getMoreResults }
            className="mt-6"
          >
            Load More
          </Button>
        }
      </div>
    </div>
  );
}

export default Results;
