import {
  SearchHeader,
  SearchForm,
  SearchFormBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <SearchHeader>
      <SearchForm>
        <SearchFormBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete ="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
};
