function Category({ name, url }) {
  return (
    <a className="category" href={url}>
      {name}
    </a>
  );
}

export default Category;
