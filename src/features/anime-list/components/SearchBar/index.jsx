import { Container, Input, ClearButton } from "./styles";

function SearchBar({ value, onChange, onClear }) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="What anime are you looking for?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <ClearButton onClick={onClear}>Clear the spell</ClearButton>}
    </Container>
  );
}

export default SearchBar;
