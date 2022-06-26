import React, { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext/AppContext';

function SearchBar({ className = '', autoFocus = false }) {
  const {
    searchTerm,
    setSearchTerm,
    docsSearch
  } = useContext(AppContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      docsSearch(searchTerm);
    }
  };

  const clearSearchBarText = () => {
    setSearchTerm('');

    document.querySelector('input').focus();
  };

  return (
    <div
      className={
        'flex px-4 py-2 text-xl border rounded-full hover:shadow-md focus:shadow border-googray-light h-10 ' + className
      }
    >
      <div className="flex items-center">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="45.402px" height="45.402px" viewBox="0 0 45.402 45.402" style="enable-background:new 0 0 45.402 45.402;"
	 xml:space="preserve">
<g>
	<path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

      </div>
      
      <input
        className="w-full px-3 outline-none font-roboto"
        type="text"
        value={ searchTerm }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown }
        autoFocus={ autoFocus }
      />

      { searchTerm.length > 0 &&
        <div className="flex items-center">
          <button
            onClick={ clearSearchBarText }
          >
            <svg
              className="w-5 h-5 text-googray hover:text-googray-text"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      }
    </div>
  );
}

export default SearchBar;