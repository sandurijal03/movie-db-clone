import { useState, useRef, useEffect } from 'react';

import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './Searchbar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          ref={initial}
          placeholder='Search Movie'
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
