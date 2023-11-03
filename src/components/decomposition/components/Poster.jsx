function Poster({ url, name }) {
  return (
    <img
      src={url}
      alt={name}
      style={{
        width: "500px",
      }}
    />
  );
}

export default Poster;
