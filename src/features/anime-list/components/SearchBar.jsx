function SearchBar({ value, onChange, onClear }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search anime..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && <button onClick={onClear}>✕</button>}
    </div>
  );
}

export default SearchBar;
