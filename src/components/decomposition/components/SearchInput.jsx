import "../css/SearchInput.css";

function SearchInput({ name, url }) {
  return (
    <div className="search-input">
      <img
        src={url}
        alt={name}
        style={{
          width: "50px",
        }}
      />
      <input type="search" name="search" />
      <button type="submit">Найти</button>
    </div>
  );
}

export default SearchInput;
