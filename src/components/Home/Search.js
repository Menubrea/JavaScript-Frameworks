import {
  Container,
  ThumbnailCard,
  SearchBar,
  ItemList,
  SearchContainer,
} from '../../styles/BaseStyles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

export function ProductSearch({ data, isLoading, isError }) {
  const [searchField, setSearchField] = useState('');

  const filteredItems = data.filter((item) => {
    if (
      item.title.toLowerCase().startsWith(searchField.toLowerCase()) &&
      searchField.length > 0
    ) {
      return true;
    }
    return false;
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const resetField = () => {
    document.querySelector('#searchField').value = '';
    setSearchField('');
    display = '';
  };

  let display;
  filteredItems.length === 0 && searchField.length > 0
    ? (display = (
        <div>
          <strong>No Items Found.</strong>
        </div>
      ))
    : (display = (
        <ItemList>
          {filteredItems.map((item) => (
            <ThumbnailCard key={item.id}>
              <Link to={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </Link>
            </ThumbnailCard>
          ))}
        </ItemList>
      ));

  return (
    <Container>
      <SearchBar>
        <input
          id="searchField"
          onChange={handleChange}
          placeholder="Search"
        ></input>
        {searchField && (
          <button onClick={resetField}>
            <ClearIcon fontSize="small" />
          </button>
        )}
      </SearchBar>
      <SearchContainer>
        {display}
        {searchField && <button onClick={resetField}>Close</button>}
      </SearchContainer>
    </Container>
  );
}
