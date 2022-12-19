import {
  SearchHeader,
  SearchForm,
  SearchFormBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ handleSubmit }) => {
  return (
    <SearchHeader>
      <SearchForm
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <SearchFormBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
};
